import React from 'react'
import AddBoardForm from './../Forms/AddBoardForm';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddBoardModal } from '@/store/SidebarSlice';
import { RootState } from '@/store/store';
import Modal from '@/components/Modal';
import { setEditBoardMode } from '@/store/navbarSlice';

function AddBoardModal() {

    const dispatch = useDispatch();

    return (
        <Modal event={() => {
            dispatch(toggleAddBoardModal())
            dispatch(setEditBoardMode(false))
            }}>
            <div className="relative w-full max-w-[22rem] md:max-w-[30rem] top-16 mx-auto py-4 bg-gray rounded-lg text-white shadow-md shadow-shadow">
                <AddBoardForm />
            </div>
        </Modal>
    )
}

export default AddBoardModal