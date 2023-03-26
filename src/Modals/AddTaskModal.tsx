import React, { useEffect, useState } from 'react'
import CreateTaskForm from '../Forms/AddTaskForm';
import { kanbanBoards, columns } from './../Types/KanbanTypes';

function TaskModal({ setTaskModalOpen, boards, activeBoard }: {
    setTaskModalOpen: any,
    boards: kanbanBoards[] | [],
    activeBoard: kanbanBoards | null
}) {

    const [columns, setColumns] = useState<String[] | []>([])

    useEffect(() => {
        if (activeBoard) {
            let columns = boards.find(board => board._id === activeBoard._id)?.columns.map((column: columns) => column.title);
            setColumns(columns ? columns : [])
        }
        return () => {
            setColumns([])
        }
    }, [boards])
    return (
        <div
            className="fixed inset-0 overflow-y-auto flex items-center justify-center z-40"
        >
            <div
                onClick={(e) => {
                    if (e.target === e.currentTarget)
                        setTaskModalOpen(false)
                }}
                className="absolute inset-0 bg-darkBG bg-opacity-25">
                <div className="relative w-full max-w-[22rem] md:max-w-[30rem] mx-auto py-4 top-8 bg-gray rounded-lg text-white shadow-md shadow-shadow">
                    <CreateTaskForm columns={columns} />
                </div>
            </div>
        </div>
    )
}

export default TaskModal