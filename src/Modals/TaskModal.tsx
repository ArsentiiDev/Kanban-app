import React from 'react'
import CreateTaskForm from '../Forms/CreateTaskForm';

function TaskModal({ setTaskModalOpen }: any) {
    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget)
                    setTaskModalOpen(false)
            }}
            className="absolute top-0 left-0 right-0 bottom-[-100vh] py-6 px-12 bg-darkBG bg-opacity-25">
            <div className="relative w-full max-w-[22rem] mx-auto py-4 bg-gray rounded-lg text-white shadow-md shadow-shadow">
                <CreateTaskForm />
            </div>
        </div>
    )
}

export default TaskModal