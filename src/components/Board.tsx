import React, { useEffect, useState } from 'react'
import Column from './Column'
import Task from './Task'
import AddColumnModal from './../Modals/AddColumnModal';
import { useSelector } from 'react-redux';

function Board({ boards }: {
    boards: any
}) {
    const [addColumnOpen, setAddColumnOpen] = useState(false)
    const [columns, setColumns] = useState(null);
    const activeBoardId = useSelector((state: any) => state.board.activeBoardId);

    useEffect(() => {
        if (boards) {
            setColumns(boards[activeBoardId].columns)
        }

    }, [boards, activeBoardId])

    const toggleAddColumnModal = () => {
        setAddColumnOpen(!addColumnOpen)
    }

    const isSidebarOpen = useSelector((state: any) => state.sidebar.isVisible);

    return (
        <>
            <div className={`flex ${isSidebarOpen ? 'md:relative md:left-[18rem] md:top-[1rem] pt-12' : 'md:left-0 pt-8'}  overflow-x-scroll min-h-screen bg-mainBG text-white`}>
                {columns && columns.map((column) => (
                    <Column key={column.id}>
                        <h2 className="font-bold text-sm mb-4 tracking-widest text-secondary">{column.title} ({column.tasks.length})</h2>
                        {column.tasks.map((task) => (
                            <Task key={task.id} task={task} />
                        ))}
                    </Column>
                ))}
                {boards && (
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
            {
                addColumnOpen && (
                    <AddColumnModal setAddColumnOpen={setAddColumnOpen} setColumns={setColumns} columns={columns} boardName={boards[activeBoardId]} />
                )
            }
        </>
    )
}

export default Board