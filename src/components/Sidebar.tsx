import Image from 'next/image'
import React, { useState } from 'react'
import board from '../assets/icon-board.svg'
import hideSidebar from '../assets/icon-hide-sidebar.svg'
import { useMediaQuery } from 'react-responsive';


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

function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(true)
    const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
    const toggleSidebar = () => {
        console.log('test')
        setSidebarOpen(!isSidebarOpen)
    }
    return (
        <>
            {/* {isSidebarOpen && ( */} {/*React redux required*/}
            <div className="hidden md:bg-gray md:fixed md:flex md:flex-col z-30 top-16 bottom-0 md:w-[18rem] left:0 text-white pt-8 pb-4">
                <h4 className="px-6 font-medium tracking-widest text-sm mb-3 text-secondary">ALL BOARDS ({boards.length})</h4>
                <div className="flex-grow">
                    {boards && boards.map((el, index) => (
                        <div key={index} className="flex gap-4 mr-6 items-center cursor-pointer hover:bg-darkBlue pl-6 py-3 hover:rounded-r-full hover:text-white">
                            <Image src={board} alt="board" />
                            <h3>{el.id}</h3>
                        </div>
                    ))}
                    <div className="flex items-center gap-4 pl-6 py-3 mr-6 text-lightBlue cursor-pointer hover:bg-darkBlue hover:rounded-r-2xl hover:text-white">
                        <Image src={board} alt="board" />
                        <h4>+Create New Board</h4>
                    </div>
                </div>
                <div className="mr-6">
                    <button
                        onClick={() => toggleSidebar()}
                        className="w-full px-4 text-secondary font-bold inline-flex gap-2 items-center hover:bg-darkBlue hover:rounded-r-full py-3 hover:text-white">
                        <Image src={hideSidebar} alt="hide" />
                        Hide Sidebar
                    </button>
                </div>
            </div>
            {/* )} */}

        </>

    )
}

export default Sidebar