import React from 'react'


export default function TaskItem({ task }) {
    const startDrag = event => {
        event.dataTransfer.setData('drag-item', task.id)
    }
    return (
        <div className="rounded w-auto m-2 overflow-hidden shadow-lg p-10" draggable onDragStart={startDrag}>
            <p class="text-gray-700 text-base">{task.text}</p>
        </div>);
}