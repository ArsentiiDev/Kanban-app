import React from 'react';
import AddColumnForm from '../Forms/AddColumnForm';
import { useDispatch } from 'react-redux';
import { toggleAddColumnModal } from '@/store/columnSlice';
import Modal from '@/components/Modal';

function AddColumnModal() {

    const dispatch = useDispatch();

    return (
        <Modal event={() => dispatch(toggleAddColumnModal())}>
            <div
                className="relative w-full max-w-[22rem] md:max-w-[30rem] top-1/3 mx-auto p-8 bg-gray rounded-lg text-white shadow-md shadow-shadow">
                <AddColumnForm />
            </div>
        </Modal>
    );
}

export default AddColumnModal;
