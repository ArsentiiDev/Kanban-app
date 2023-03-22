import { setActiveBoard } from '@/store/boardSlice';
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import board from '../assets/icon-board.svg'
import { RootState } from '@/store/store';
import { kanbanBoards } from '@/Types/KanbanTypes';

function HeaderDropdown({ setOpenDropdown, boardsAmount, toggleAddModal, boards }: {
    setOpenDropdown: (arg0: boolean) => any,
    boardsAmount: number,
    toggleAddModal: () => any,
    boards: kanbanBoards[]
}) {

    const activeBoardId = useSelector((state: RootState) => state.board.activeBoardId);
    const dispatch = useDispatch();

    const handleBoardChange = (id: string): any => {
        dispatch(setActiveBoard(id));
    };

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget)
                    setOpenDropdown(false)
            }}
            className="absolute md:hidden top-[4.5rem] left-0 right-0 bottom-[-100vh] py-6 px-12 bg-darkBG bg-opacity-25">
            <div className="relative w-[25rem] py-4 bg-gray rounded-lg text-secondary shadow-md shadow-shadow">
                <h4 className="px-6 font-medium tracking-widest text-sm mb-3">ALL BOARDS ({boardsAmount})</h4>
                {boards && boards.map((el, index) => (
                    <div
                        onClick={() => handleBoardChange(el.id)}
                        key={index} className={`flex gap-4 mr-6 items-center cursor-pointer pl-6 py-3 my-2 ${activeBoardId === el.id ? 'bg-darkBlue rounded-r-full hover:bg-white text-white hover:text-lightBlue font-bold ' : 'hover:bg-darkBlue hover:rounded-r-full hover:text-white'}`}>
                        <Image src={board} alt="board" />
                        <h3>{el.id}</h3>
                    </div>
                ))}
                <div
                    onClick={toggleAddModal}
                    className="flex items-center gap-4 pl-6 py-3 mr-6 text-lightBlue cursor-pointer hover:bg-darkBlue hover:rounded-r-full hover:text-white">
                    <Image src={board} alt="board" />
                    <h4>+Create New Board</h4>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropdown