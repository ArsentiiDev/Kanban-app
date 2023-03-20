import Image from 'next/image'
import React from 'react'
import board from '../assets/icon-board.svg'

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

function HeaderDropdown({ setOpenDropdown }: any) {

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget)
                    setOpenDropdown(false)
            }}
            className="absolute top-[3.75rem] left-0 right-0 bottom-[-100vh] py-6 px-12 bg-darkBG bg-opacity-25">
            <div className="relative w-full py-4 bg-gray rounded-lg text-secondary shadow-md shadow-shadow">
                <h4 className="px-6 font-medium tracking-widest text-sm mb-3">ALL BOARDS ({boards.length})</h4>
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
        </div>
    )
}

export default HeaderDropdown