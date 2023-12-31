import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import board from '../assets/icon-board.svg'
import hideSidebar from '../assets/icon-hide-sidebar.svg'
import { useSelector, useDispatch } from 'react-redux';
import { setActiveBoard } from '../store/boardSlice';
import { toggleSidebar, toggleAddBoardModal } from '@/store/SidebarSlice';
import openSidebar from '../assets/icon-show-sidebar.svg'
import { RootState } from '@/store/store';
import { kanbanBoards } from '@/Types/KanbanTypes';
import AddBoardModal from './../Modals/AddBoardModal';


function Sidebar() {
    const activeBoard: kanbanBoards | null = useSelector((state: RootState) => state.board.activeBoard);
    const isSidebarOpen: Boolean = useSelector((state: RootState) => state.sidebar.isSidebarVisible);
    const addBoardModalOpen: Boolean = useSelector((state: RootState) => state.sidebar.addBoardModalOpen);
    const boards: kanbanBoards[] = useSelector((state: RootState) => state.board.boards);
    const dispatch = useDispatch();

    const handleBoardChange = (board: kanbanBoards) => {
        dispatch(setActiveBoard(board));
    };

    const toggleSidebarVisibility = () => {
        dispatch(toggleSidebar())
    }

    const toggleAddModal = () => {
        dispatch(toggleAddBoardModal())
    }

    return (
        <>
            {isSidebarOpen && (
                <div className="hidden md:bg-gray md:z-10 md:fixed md:flex md:flex-col  top-16 bottom-0 md:w-[16rem] left:0 text-white pt-8 pb-4">
                    <h4 className="px-6 font-medium tracking-widest text-sm mb-3 text-secondary">ALL BOARDS ({boards ? boards.length : 0})</h4>
                    <div className="flex-grow">
                        {boards && activeBoard && boards.map((el: kanbanBoards, index: number) => (
                            <div
                                onClick={() => handleBoardChange(el)}
                                key={index}
                                className={`flex gap-4 mr-6 my-2 items-center cursor-pointer 
                            ${el._id === activeBoard._id ?
                                        ' bg-darkBlue rounded-r-full hover:bg-white hover:text-darkBlue font-bold tracking-wider'
                                        : 'hover:rounded-r-full hover:bg-darkBlue hover:text-white'
                                    }  pl-6 py-3`}>
                                <Image src={board} alt="board" />
                                <h3>{el.title}</h3>
                            </div>
                        ))}
                        <div
                            onClick={toggleAddModal}
                            className="flex items-center gap-4 pl-6 py-3 mr-6 text-lightBlue cursor-pointer hover:bg-darkBlue hover:rounded-r-full hover:text-white">
                            <Image src={board} alt="board" />
                            <h4>+Create New Board</h4>
                        </div>
                    </div>
                    <div className="mr-6">
                        <button
                            onClick={toggleSidebarVisibility}
                            className="w-full px-4 text-secondary font-bold inline-flex gap-2 items-center hover:bg-darkBlue hover:rounded-r-full py-3 hover:text-white">
                            <Image src={hideSidebar} alt="hide" />
                            Hide Sidebar
                        </button>
                    </div>
                </div>
            )}

            {!isSidebarOpen && (
                <div className="container hidden md:block md:z-10 sticky top-[calc(100%-5rem)]">
                    <button
                        onClick={toggleSidebarVisibility}
                        className="bg-darkBlue w-fit pl-2 pr-4 rounded-r-full text-white text-sm font-bold flex gap-2 items-center py-3">
                        <Image src={openSidebar} alt="hide" />
                        Open Sidebar
                    </button>
                </div>
            )}
            {addBoardModalOpen && (
                <AddBoardModal  />
            )}
        </>

    )
}

export default Sidebar