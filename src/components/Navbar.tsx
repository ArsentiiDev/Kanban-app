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
import TaskModal from '../Modals/TaskModal';


const projects = [
    {
        id: 'Test Project'
    },
    {
        id: 'Platform Launch',
    }
]


function Navbar() {
    const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
    const board = projects[0].id;
    const [openDropdown, setDropdown] = useState(false)
    const [isElipsisMenuOpen, setElipsisMenu] = useState(false);
    const [isTaskModalOpen, setTaskModalOpen] = useState(false);

    const toggleThreeDotsMenu = () => {
        console.log('test')
        setDropdown(!openDropdown);
        setElipsisMenu(!isElipsisMenuOpen)
    }

    return (
        <div className="fixed right-0 left-0 z-10 text-white">
            <header className="flex p-4 items-center relative bg-gray">
                <div className="flex md:w-[18rem] gap-4 items-center pl-2">
                    <Image src={logo} alt="logo" />
                    <h3 className="hidden md:block text-4xl font-semibold">
                        kanban
                    </h3>
                </div>
                <div
                    className={`flex mr-auto justify-start items-center ${!isBigScreen ? 'cursor-pointer' : ''}`}
                    onClick={() => !isBigScreen ? toggleThreeDotsMenu() : null}
                >
                    {board && (
                        <div className="mx-4">
                            <h2 className="text-xl font-bold">{board}</h2>
                        </div>
                    )}
                    <Image
                        src={openDropdown ? downDropdown : upDropdown}
                        alt="dropdown"
                        className="block md:hidden"
                    />
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
            {openDropdown && !isBigScreen && (
                <HeaderDropdown
                    setOpenDropdown={setDropdown}
                />
            )
            }
            {
                isTaskModalOpen && (
                    <TaskModal setTaskModalOpen={setTaskModalOpen} />
                )
            }
        </div >
    )
}

export default Navbar