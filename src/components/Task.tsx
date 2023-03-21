import React from 'react'

interface Task {
    task: {
        id: number
        title: string
        description: string,
        subtasks: any
    }
}

function Task({ task }: Task) {
    return (
        <div
            key={task.id}
            className="bg-gray w-full p-4 mb-4 rounded-lg shadow-md shadow-shadow cursor-pointer"
        >
            <h3 className="font-bold text-lg mb-2">{task.title}</h3>
            <p className="text-sm text-secondary font-bold tracking-wider">{task.subtasks ? task.subtasks.reduce((acc, object) => acc + object.isDone, 0) + ' of ' + task.subtasks.length + ' subtasks' : 'No subtasks'}</p>
        </div>
    )
}

export default Task