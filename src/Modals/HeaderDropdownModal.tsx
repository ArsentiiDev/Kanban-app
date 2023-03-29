import { setActiveBoard } from '@/store/boardSlice';
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import board from '../assets/icon-board.svg'
import { RootState } from '@/store/store';
import { kanbanBoards } from '@/Types/KanbanTypes';
import { toggleHeaderModal } from '@/store/navbarSlice';
import { toggleAddBoardModal } from '@/store/SidebarSlice';

function HeaderDropdown() {

    const activeBoard = useSelector((state: RootState) => state.board.activeBoard);
    const boards = useSelector((state: RootState) => state.board.boards);
    const dispatch = useDispatch();

    const handleBoardChange = (board: kanbanBoards): any => {
        dispatch(setActiveBoard(board));
    };

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget)
                    dispatch(toggleHeaderModal())
            }}
            className="absolute md:hidden inset-x-0 top-[4.75rem] bottom-0 bg-darkBG py-6 px-12 bg-opacity-25 z-10"
        >
            <div
            className="relative w-[25rem] py-4 bg-gray rounded-lg text-secondary shadow-md shadow-shadow">
                <h4 className="px-6 font-medium tracking-widest text-sm mb-3">ALL BOARDS ({boards.length})</h4>
                {boards && boards.map((el, index) => (
                    <div
                        onClick={() => handleBoardChange(el)}
                        key={index} className={`flex gap-4 mr-6 items-center cursor-pointer pl-6 py-3 my-2 ${activeBoard?._id === el._id ? 'bg-darkBlue rounded-r-full hover:bg-white text-white hover:text-lightBlue font-bold ' : 'hover:bg-darkBlue hover:rounded-r-full hover:text-white'}`}>
                        <Image src={board} alt="board" />
                        <h3>{el.title}</h3>
                    </div>
                ))}
                <div
                    onClick={() => dispatch(toggleAddBoardModal())}
                    className="flex items-center gap-4 pl-6 py-3 mr-6 text-lightBlue cursor-pointer hover:bg-darkBlue hover:rounded-r-full hover:text-white">
                    <Image src={board} alt="board" />
                    <h4>+Create New Board</h4>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdown