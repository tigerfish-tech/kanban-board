import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

const list = {
  statuses: [
    'TODO', 'IN_PROGRESS', 'DONE'
  ],
  tasks: [
    {
      id: 1,
      text: 'Eat breakfast',
      status: 'DONE',
    },
    {
      id: 2,
      text: 'Have a walk with a family',
      status: 'TODO',
    },
    {
      id: 3,
      text: 'Make kanban app',
      status: 'TODO',
    },
    {
      id: 4,
      text: 'Make kanban app',
      status: 'IN_PROGRESS',
    }
  ]
}

export default function App() { 
const [data, setData] = useState(list);

const getTasks = status => {
  return data.tasks.filter(task => task.status === status).map(task => (<TaskItem task={ task } key={ task.id } />));
}

const onDrop = (itemId, newStatus) => {
  const id = parseInt(itemId);
  const index = data.tasks.findIndex(task => task.id === id);
  const newTask = {
    ...data.tasks[index],
    status: newStatus,
  }
  const newTasks = [
    ...data.tasks.slice(0, index),
    newTask,
    ...data.tasks.slice(index + 1),
  ]

  const newData = {
    ...data,
    tasks: newTasks
  }

  setData(newData)
}

return (
<div>{data.statuses.map(status => 
  (<TaskList onDroppedItem={onDrop} listname = {status} tasks = {getTasks(status)} key={status}/>)
  )}
  </div>); 
}
