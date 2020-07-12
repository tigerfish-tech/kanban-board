import React from 'react';

export default function TaskList(props) {
    function dragOver(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        const droppedItem = ev.dataTransfer.getData("drag-item");
        if (droppedItem) {
            props.onDroppedItem(droppedItem, props.listname)
        }
    }

    return (
    <div className={props.styleClass} onDragOver={dragOver} onDrop={drop}>
        <h3 className="text-center">{props.listname}</h3>
        {props.tasks}
    </div>);
}