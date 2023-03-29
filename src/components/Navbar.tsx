"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo-mobile.svg';
import upDropdown from '../assets/icon-chevron-up.svg';
import downDropdown from '../assets/icon-chevron-down.svg'
import addIconMobile from '../assets/icon-add-task-mobile.svg'
import settingsIcon from '../assets/settings.svg'
import HeaderDropdown from '../Modals/HeaderDropdownModal';
import TaskModal from '../Modals/AddTaskModal';
import { useSelector, useDispatch } from 'react-redux';
import { kanbanBoards } from './../Types/KanbanTypes';
import { RootState } from '@/store/store';
import { Dispatch } from '@reduxjs/toolkit';
import { isEmptyArray } from 'formik';
import { toggleHeaderModal, toggleTaskModal, toggleEditBoardModal } from '@/store/navbarSlice';
import  Button  from '@/components/Button';
import SettingsModal from '@/Modals/SettingsModal';

function Navbar() {
    const activeBoard: kanbanBoards | null = useSelector((state: RootState) => state.board.activeBoard);
    const isTaskModalOpen: Boolean = useSelector((state: RootState) => state.navbar.isTaskModalOpen);
    const isHeaderDropdownOpen: Boolean = useSelector((state: RootState) => state.navbar.isHeaderDropdownOpen);
    const isEditBoardModalOpen: Boolean = useSelector((state: RootState) => state.navbar.isEditBoardOpen);
    const dispatch: Dispatch = useDispatch();

    return (
        <>
            <div className="fixed z-10 right-0 left-0 text-white">
                <header className="flex p-4 items-center relative bg-gray">
                    <div className="flex md:w-[16rem] gap-4 items-center pl-2">
                        <Image src={logo} alt="logo" />
                        <h3 className="hidden md:block text-4xl font-semibold">
                            kanban
                        </h3>
                    </div>
                    <div
                        className={`flex mr-auto justify-start items-center cursor-pointer md:cursor-auto`}

                    >
                        {activeBoard && (
                            <>
                                <div className="ml-4 mr-2">
                                    <h2 className="text-2xl font-bold">{activeBoard.title}</h2>
                                </div>
                                <div
                                onClick={()=>dispatch(toggleHeaderModal())}
                                className="p-4 hover:bg-secondary/25 rounded-xl inline-flex items-center justify-center md:hidden">
                                <Image
                                    src={isHeaderDropdownOpen ? downDropdown : upDropdown}
                                    alt="dropdown"
                                    className="scale-150"
                                />
                                </div>
                            </>
                        )}
                    </div>
                    {activeBoard && (
                        <>
                        <div className="flex items-center gap-4">
                            <Button
                                onClick={() => {
                                    dispatch(toggleTaskModal())
                                }}
                                primary={false}
                                spacing={`py-3 px-6`}
                            >
                                <p className="hidden md:block text-sm uppercase">Add Task</p>
                                <Image className="block md:hidden fill-gray" src={addIconMobile} alt="add" />
                            </Button>
                        </div>
                        <div 
                        className="hover:bg-secondary/25 rounded-2xl cursor-pointer p-2 ml-4"
                        onClick={() => dispatch(toggleEditBoardModal())}
                        >
                        <Image
                            className=" scale-125"
                            src={settingsIcon}
                            alt="dots"
                        />
                    </div>
                        </>
                    )}

                </header >
            </div >
            {isHeaderDropdownOpen && (
                <HeaderDropdown />
            )}
            {isTaskModalOpen && (
                <TaskModal />
            )}
            {isEditBoardModalOpen && (
                <SettingsModal />
            )}
        </>

    )
}

export default Navbar