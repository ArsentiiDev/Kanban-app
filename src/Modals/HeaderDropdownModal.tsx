import { setActiveBoard } from '@/store/boardSlice';
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import board from '../assets/icon-board.svg'
import { toggleAddModalVisibility } from '@/store/SidebarSlice';
import AddBoardModal from '@/Modals/AddBoardModal';

const boards = [
    {
        id: 'Platform Launch'
    },
    {
        id: 'Marketing Plan'
    },
    {
        id: 'Roadmap'
    }
]

function HeaderDropdown({ setOpenDropdown, boardsAmount, toggleAddModal }: {
    setOpenDropdown: any,
    boardsAmount: any,
    toggleAddModal: any
}) {

    const activeBoardId = useSelector((state: any) => state.board.activeBoardId);
    const dispatch = useDispatch();

    const handleBoardChange = (id: Number): any => {
        dispatch(setActiveBoard(id));
    };

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget)
                    setOpenDropdown(false)
            }}
            className="absolute top-[4.5rem] left-0 right-0 bottom-[-100vh] py-6 px-12 bg-darkBG bg-opacity-25">
            <div className="relative w-[25rem] py-4 bg-gray rounded-lg text-secondary shadow-md shadow-shadow">
                <h4 className="px-6 font-medium tracking-widest text-sm mb-3">ALL BOARDS ({boardsAmount})</h4>
                {boards && boards.map((el, index) => (
                    <div
                        onClick={() => handleBoardChange(index)}
                        key={index} className={`flex gap-4 mr-6 items-center cursor-pointer pl-6 py-3 my-2 ${activeBoardId === index ? 'bg-darkBlue rounded-r-full hover:bg-white text-white hover:text-lightBlue font-bold ' : 'hover:bg-darkBlue hover:rounded-r-full hover:text-white'}`}>
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