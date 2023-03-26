"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo-mobile.svg';
import upDropdown from '../assets/icon-chevron-up.svg';
import downDropdown from '../assets/icon-chevron-down.svg'
import addIconMobile from '../assets/icon-add-task-mobile.svg'
import threeDots from '../assets/icon-vertical-ellipsis.svg'
import HeaderDropdown from '../Modals/HeaderDropdownModal';
import TaskModal from '../Modals/AddTaskModal';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddModalVisibility } from '@/store/SidebarSlice';
import { kanbanBoards } from './../Types/KanbanTypes';
import { RootState } from '@/store/store';
import { Dispatch } from '@reduxjs/toolkit';
import { isEmptyArray } from 'formik';

function Navbar({ boards }: {
    boards: kanbanBoards[] | []
}) {
    const [openDropdown, setDropdown] = useState(false)
    const [isElipsisMenuOpen, setElipsisMenu] = useState(false);
    const [isTaskModalOpen, setTaskModalOpen] = useState(false);

    const activeBoard: kanbanBoards | null = useSelector((state: RootState) => state.board.activeBoard);
    const addBoardModalOpen: Boolean = useSelector((state: RootState) => state.sidebar.addBoardModalOpen);
    const dispatch: Dispatch = useDispatch();


    const toggleThreeDotsMenu: VoidFunction = () => {
        setDropdown(!openDropdown);
        setElipsisMenu(!isElipsisMenuOpen)
    }

    const toggleAddModal: VoidFunction = () => {
        dispatch(toggleAddModalVisibility(!addBoardModalOpen))
    }

    return (
        <>
            <div className="fixed z-10 right-0 left-0 text-white">
                <header className="flex p-4 items-center relative bg-gray">
                    <div className="flex md:w-[18rem] gap-4 items-center pl-2">
                        <Image src={logo} alt="logo" />
                        <h3 className="hidden md:block text-4xl font-semibold">
                            kanban
                        </h3>
                    </div>
                    <div
                        className={`flex mr-auto justify-start items-center cursor-pointer md:cursor-auto`}

                    >
                        {!isEmptyArray(boards) && (
                            <div className="ml-4 mr-2">
                                <h2 className="text-xl font-bold">Board: {activeBoard ? activeBoard.title : ''}</h2>
                            </div>
                        )}
                        <div
                            onClick={toggleThreeDotsMenu}
                            className="p-4 hover:bg-secondary/25 rounded-xl inline-flex items-center justify-cente md:hidden">
                            <Image
                                src={openDropdown ? downDropdown : upDropdown}
                                alt="dropdown"
                                className="scale-150"
                            />
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                setTaskModalOpen(true)
                            }}
                            className="px-5 py-3 bg-darkBlue hover:bg-lightBlue rounded-full">
                            <p className="hidden md:block">+ Add New Task</p>
                            <Image className="block md:hidden" src={addIconMobile} alt="add" />
                        </button>
                        <Image
                            className="cursor-pointer"
                            src={threeDots}
                            alt="dots"
                        />
                    </div>
                </header >

            </div >
            {!isEmptyArray(boards) && (
                <>
                    {openDropdown && (
                        <HeaderDropdown
                            setOpenDropdown={setDropdown}
                            toggleAddModal={toggleAddModal}
                            boardsAmount={boards.length}
                            boards={boards}
                        />
                    )}
                    {isTaskModalOpen && (
                        <TaskModal setTaskModalOpen={setTaskModalOpen} boards={boards} activeBoard={activeBoard} />
                    )
                    }
                </>
            )}
        </>

    )
}

export default Navbar