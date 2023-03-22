import React from 'react'
import { tasks } from '@/Types/KanbanTypes';


function Task({ task }: {
    task: tasks
}) {
    return (
        <div
            key={task.id}
            className="bg-gray w-full p-4 mb-4 rounded-lg shadow-md shadow-shadow cursor-pointer"
        >
            <h3 className="font-bold text-lg mb-2">{task.title}</h3>
            <p className="text-sm text-secondary font-bold tracking-wider">{task.subtasks ? task.subtasks.reduce((acc, object) => {
                if (object.isDone) { return acc + 1 }
                else { return acc }
            }, 0) + ' of ' + task.subtasks.length + ' subtasks' : 'No subtasks'}</p>
        </div>
    )
}

export default Task