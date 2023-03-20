import React from 'react'

interface Task {
    task: {
        id: number
        title: string
        description: string
    }
}

function Task({ task }: Task) {
    return (
        <div
            key={task.id}
            className="bg-gray w-full p-4 mb-4 rounded-lg shadow-md shadow-shadow cursor-pointer"
        >
            <h3 className="font-bold text-base mb-2">{task.title}</h3>
            <p className="text-sm text-secondary">{task.description}</p>
        </div>
    )
}

export default Task