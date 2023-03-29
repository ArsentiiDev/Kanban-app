import React from 'react'
import Column from './Column'
import Task from './Task'
import AddColumnModal from './../Modals/AddColumnModal';
import { useSelector, useDispatch } from 'react-redux';
import { kanbanBoards, columns } from './../Types/KanbanTypes';
import { RootState } from '@/store/store';
import { toggleAddColumnModal } from '@/store/columnSlice';

function Board() {
    const activeBoard: kanbanBoards | null = useSelector((state: RootState) => state.board.activeBoard);
    const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarVisible);
    const addColumnOpen = useSelector((state:RootState) => state.column.isColumnModalOpen)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`flex ${isSidebarOpen ? 'md:relative md:left-[18rem] md:top-[1rem] pt-12' : 'md:left-0 pt-8'}  overflow-x-scroll min-h-screen bg-mainBG text-white`}>
                {activeBoard && activeBoard.columns && activeBoard.columns.map((column, index) => (
                    <Column key={index}>
                        <h2 className="font-bold text-sm mb-4 tracking-widest text-secondary">{column.title} ({column.tasks.length})</h2>
                        {column.tasks.map((task,i) => (
                            <div key={i}>
                                <Task task={task} />
                            </div>
                        ))}
                    </Column>
                ))}
                {activeBoard && (
                    <Column
                        stylings={`bg-newColumn hover:shadow-xl hover:text-lightBlue hover:shadow-lightBlue/10 cursor-pointer`}>
                        <div
                            onClick={() => dispatch(toggleAddColumnModal())}
                            className="h-[100%] flex items-center justify-center"
                        >
                            <h2 className="font-bold text-2xl tracking-widest text-center">+New Column</h2>
                        </div>
                    </Column>
                )
                }
            </div>
            {addColumnOpen && (
                <AddColumnModal />
            )}
        </>
    )
}

export default Board