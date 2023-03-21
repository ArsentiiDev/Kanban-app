import CreateTaskForm from '@/Forms/CreateTaskForm'
import React from 'react'
import AddBoardForm from './../Forms/AddBoardForm';

function AddBoardModal({ triggerEvent, setBoards, boards }: {
    triggerEvent: any,
    setBoards: any,
    boards: any
}) {

    console.log('TEST')

    return (
        <div
            className="fixed inset-0 overflow-y-auto flex items-center justify-center z-40"
        >
            <div
                onClick={(e) => {
                    if (e.target === e.currentTarget)
                        triggerEvent()
                }}
                className="absolute inset-0 bg-darkBG bg-opacity-25">
                <div className="relative w-full max-w-[22rem] md:max-w-[30rem] mx-auto py-4 top-[6rem] bg-gray rounded-lg text-white shadow-md shadow-shadow">
                    <AddBoardForm setBoards={setBoards} boards={boards} />
                </div>
            </div>
        </div>
    )
}

export default AddBoardModal