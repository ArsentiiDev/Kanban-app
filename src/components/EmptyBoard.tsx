import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AddBoardModal from './../Modals/AddBoardModal';
import { toggleAddBoardModal } from '@/store/SidebarSlice';

function EmptyBoard() {
    const addBoardModalOpen = useSelector((state: any) => state.sidebar.addBoardModalOpen);
    const dispatch = useDispatch();

    const toggleAddModal = () => {
        dispatch(toggleAddBoardModal())
    }

    return (
        <div>
            <h1>There's Empty</h1>
            {addBoardModalOpen && (
                <AddBoardModal />
            )}

        </div>
    )
}

export default EmptyBoard