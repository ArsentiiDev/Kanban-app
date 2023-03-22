import React, { useEffect, useState } from 'react'
import Column from './Column'
import Task from './Task'
import AddColumnModal from './../Modals/AddColumnModal';
import { useSelector } from 'react-redux';
import { kanbanBoards, columns } from './../Types/KanbanTypes';
import { RootState } from '@/store/store';
import { isEmptyArray } from 'formik';

function Board({ boards }: {
    boards: kanbanBoards[] | []
}) {
    const [addColumnOpen, setAddColumnOpen] = useState(false)
    const [columns, setColumns] = useState<columns[] | []>([]);
    const activeBoardId: string = useSelector((state: RootState) => state.board.activeBoardId);

    useEffect(() => {
        if (boards) {
            let board = boards.find(board => board.id === activeBoardId)
            setColumns(board ? board.columns : [])
        }

    }, [boards, activeBoardId])

    const toggleAddColumnModal = () => {
        setAddColumnOpen(!addColumnOpen)
    }

    const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isVisible);

    return (
        <>
            <div className={`flex ${isSidebarOpen ? 'md:relative md:left-[18rem] md:top-[1rem] pt-12' : 'md:left-0 pt-8'}  overflow-x-scroll min-h-screen bg-mainBG text-white`}>
                {!isEmptyArray(columns) && columns.map((column, index) => (
                    <Column key={index}>
                        <h2 className="font-bold text-sm mb-4 tracking-widest text-secondary">{column.title} ({column.tasks.length})</h2>
                        {column.tasks.map((task) => (
                            <Task key={task.id} task={task} />
                        ))}
                    </Column>
                ))}
                {!isEmptyArray(boards) && (
                    <Column
                        stylings={`bg-newColumn hover:shadow-xl hover:text-lightBlue hover:shadow-lightBlue/10 cursor-pointer`}>
                        <div
                            onClick={() => toggleAddColumnModal()}
                            className="h-[100%] flex items-center justify-center"
                        >
                            <h2 className="font-bold text-2xl tracking-widest text-center">+New Column</h2>
                        </div>
                    </Column>
                )
                }
            </div>
            {addColumnOpen && (
                <AddColumnModal setAddColumnOpen={setAddColumnOpen} setColumns={setColumns} columns={columns} boardName={activeBoardId} />
            )}
        </>
    )
}

export default Board