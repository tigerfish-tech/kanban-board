import React from 'react'


export default function TaskItem({ task }) {
    const startDrag = event => {
        event.dataTransfer.setData('drag-item', task.id)
    }
    return (<div draggable onDragStart={startDrag}>{ task.text }</div>);
}