"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import logo from '../assets/logo-mobile.svg';
import upDropdown from '../assets/icon-chevron-up.svg';
import downDropdown from '../assets/icon-chevron-down.svg'
import addIconMobile from '../assets/icon-add-task-mobile.svg'
import threeDots from '../assets/icon-vertical-ellipsis.svg'
import HeaderDropdown from '../Modals/HeaderDropdownModal';
import TaskModal from '../Modals/AddTaskModal';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAddModalVisibility } from '@/store/SidebarSlice';

function Navbar({ boards }: {
    boards: any
}) {
    const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
    const [openDropdown, setDropdown] = useState(false)
    const [isElipsisMenuOpen, setElipsisMenu] = useState(false);
    const [isTaskModalOpen, setTaskModalOpen] = useState(false);

    const activeBoardId = useSelector((state: any) => state.board.activeBoardId);
    const addBoardModalOpen = useSelector((state: any) => state.sidebar.addBoardModalOpen);
    const dispatch = useDispatch();


    const toggleThreeDotsMenu = () => {
        setDropdown(!openDropdown);
        setElipsisMenu(!isElipsisMenuOpen)
    }

    const toggleAddModal = () => {
        dispatch(toggleAddModalVisibility(!addBoardModalOpen))
    }

    return (
        <>
            <div className="fixed z-10 right-0 left-0 text-white">
                <header className="flex p-4 items-center relative  bg-gray">
                    <div className="flex md:w-[18rem] gap-4 items-center pl-2">
                        <Image src={logo} alt="logo" />
                        <h3 className="hidden md:block text-4xl font-semibold">
                            kanban
                        </h3>
                    </div>
                    <div
                        className={`flex mr-auto justify-start items-center cursor-pointer md:cursor-auto`}

                    >
                        {boards && (
                            <div className="ml-4 mr-2">
                                <h2 className="text-xl font-bold">{boards.length && boards[activeBoardId].id}</h2>
                            </div>
                        )}
                        <div
                            onClick={toggleThreeDotsMenu}
                            className="p-4 hover:bg-secondary/25 rounded-xl inline-flex items-center justify-center">
                            <Image
                                src={openDropdown ? downDropdown : upDropdown}
                                alt="dropdown"
                                className="block md:hidden scale-150"
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
            {openDropdown && !isBigScreen && (
                <HeaderDropdown
                    setOpenDropdown={setDropdown}
                    toggleAddModal={toggleAddModal}
                    boardsAmount={boards.length}
                />
            )
            }
            {
                isTaskModalOpen && (
                    <TaskModal setTaskModalOpen={setTaskModalOpen} boards={boards} activeBoardId={activeBoardId} />
                )
            }
        </>

    )
}

export default Navbar