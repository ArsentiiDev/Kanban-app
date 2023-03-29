import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { AppProps } from 'next/app';
import Sidebar from './Sidebar';
import { kanbanBoards } from './../Types/KanbanTypes';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

function Layout({ children }: {
    children: JSX.Element,
}) {

    const addColumnOpen = useSelector((state:RootState) => state.column.isColumnModalOpen);
    const isTaskModalOpen: Boolean = useSelector((state: RootState) => state.navbar.isTaskModalOpen);
    const isHeaderDropdownOpen: Boolean = useSelector((state: RootState) => state.navbar.isHeaderDropdownOpen);
    const isEditBoardModalOpen: Boolean = useSelector((state: RootState) => state.navbar.isEditBoardOpen);
    const addBoardModalOpen: Boolean = useSelector((state: RootState) => state.sidebar.addBoardModalOpen);

    const isModalOpen = ():Boolean => {
        return addColumnOpen || isTaskModalOpen || isHeaderDropdownOpen || isEditBoardModalOpen || addBoardModalOpen
    }


    return (
        <div 
        className={`${isModalOpen() ? 'max-h-screen overflow-x-hidden': ''}`}>
            <Navbar />
            <Sidebar/>
            <main>{children}</main>
        </div>
    )
}

export default Layout