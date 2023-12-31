import Modal from '@/components/Modal'
import { setEditBoardMode, toggleEditBoardModal, toggleDeleteBoardModal } from '@/store/navbarSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddBoardForm from './../Forms/AddBoardForm';
import { toggleAddBoardModal } from '@/store/SidebarSlice';
import { RootState } from '@/store/store';
import DeleteBoardModal from './DeleteBoardModal';

function SettingsModal() {
    const isDeleteBoardOpen = useSelector((state:RootState) => state.navbar.isDeleteBoardModalOpen)
    const dispatch = useDispatch()
    const toggleBoardSettings = () => {
        dispatch(setEditBoardMode(true))
        dispatch(toggleAddBoardModal())
        dispatch(toggleEditBoardModal())
    }
    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget)
                    dispatch(toggleEditBoardModal())
                }}
                className="absolute inset-x-0 top-[4.75rem] md:top-[5rem] bottom-0 bg-opacity-15 z-50"
        >
            <div className="relative w-[12rem] my-2 mr-2 py-2  ml-auto bg-gray rounded-lg text-white shadow-md shadow-shadow">
                <div className="flex flex-col gap-4">
                    <div 
                    onClick={toggleBoardSettings}
                    className="hover:bg-darkBlue py-2 mr-4 rounded-r-full cursor-pointer">
                        <h3 className="font-bold px-2">Edit Board</h3>
                    </div>
                    <div
                    onClick={() => dispatch(toggleDeleteBoardModal())}
                    className="hover:bg-darkBlue py-2 mr-4 rounded-r-full cursor-pointer">
                        <h3 className="text-red font-bold px-2">Delete Board</h3>
                    </div>
                </div>
            </div>
            {isDeleteBoardOpen && (
                <DeleteBoardModal/>
            )}
        </div>
    )
}

export default SettingsModal