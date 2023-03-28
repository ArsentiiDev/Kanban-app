import React from 'react';
import AddColumnForm from '../Forms/AddColumnForm';
import { useDispatch } from 'react-redux';
import { toggleAddColumnModal } from '@/store/columnSlice';

function AddColumnModal() {

    const dispatch = useDispatch();

    return (
        <div
            className="fixed inset-0 overflow-y-auto flex items-center justify-center z-40"
        >
            <div
                onClick={(e) => {
                    if (e.target === e.currentTarget)
                    dispatch(toggleAddColumnModal())
                }}
                className="absolute inset-0 bg-darkBG bg-opacity-25" />
            <div

                className="relative w-full max-w-[22rem] md:max-w-[30rem] mx-auto p-8 bg-gray rounded-lg text-white shadow-md shadow-shadow">
                <AddColumnForm />
            </div>
        </div>
    );
}

export default AddColumnModal;
