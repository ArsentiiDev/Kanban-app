import { Dispatch } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import CreateTaskForm from '../Forms/AddTaskForm';
import { kanbanBoards, columns } from './../Types/KanbanTypes';
import { useDispatch } from 'react-redux';
import { toggleAddBoardModal } from '@/store/SidebarSlice';
import { toggleTaskModal } from '@/store/navbarSlice';
import Modal from '@/components/Modal';

function TaskModal() {

    const dispatch = useDispatch()
    //dispatch(toggleTaskModal())

    return (
        <Modal event={() => {dispatch(toggleTaskModal())}}>
            <div className="relative w-full max-w-[22rem] md:max-w-[30rem] mx-auto py-4 top-8 bg-gray rounded-lg text-white shadow-md shadow-shadow">
                    <CreateTaskForm />
            </div>
        </Modal>

    )
}

export default TaskModal