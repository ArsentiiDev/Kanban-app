import React from 'react'
import  Modal from '@/components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDeleteBoardModal, toggleEditBoardModal } from '@/store/navbarSlice';
import { RootState } from '@/store/store';
import  Button  from '@/components/Button';
import axios from 'axios';
import { deleteBoard } from '@/store/boardSlice';

function DeleteBoardModal() {
    const activeBoard = useSelector((state:RootState) => state.board.activeBoard)
    const dispatch = useDispatch();
    const handleSubmit = async () => {
        try {
            const response = await axios.delete(`/api/board?id=${activeBoard?._id}`)
            if (response.status === 200) {
                dispatch(deleteBoard())
                dispatch(toggleDeleteBoardModal())
                dispatch(toggleEditBoardModal())
            }
        } catch(err) {
            console.log('Failed to delete the board: ', err)
        }
        console.log('submit');
    }
  return (
    <Modal>
        <div className="relative w-full max-w-[22rem] md:max-w-[30rem] mt-[15rem] mx-auto py-4 bg-gray rounded-lg text-white shadow-md shadow-shadow">
            <div className="px-6 py-4">
                <h1 className="font-bold text-xl">Do you want to delete the current Board:<br/> {activeBoard?.title}</h1>
                <div className="flex w-full gap-8 mt-6"> 
                    <Button
                    primary={true}
                    onClick={handleSubmit}
                    >
                        <p>Confirm deletion</p>
                    </Button>
                    <Button
                    primary={false}
                    onClick={() => dispatch(toggleDeleteBoardModal())}
                    >
                        <p>Cancel deletion</p>
                    </Button>
                </div>

            </div>
        </div>
    </Modal>
  )
}

export default DeleteBoardModal