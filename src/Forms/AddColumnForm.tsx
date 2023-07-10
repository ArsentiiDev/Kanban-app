import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { columns } from './../Types/KanbanTypes';
import { RootState } from '@/store/store';
import axios from 'axios';
import { toggleAddColumnModal } from '@/store/columnSlice';
import { addColumn } from '@/store/boardSlice';

const AddColumnForm = () => {

    const activeBoard = useSelector((state:RootState) => state.board.activeBoard);
    const dispatch = useDispatch()
    const initialValues = {
        column: '',
    };

    const validationSchema = Yup.object({
        column: Yup.string().required('Column name is required'),
    });

    const handleSubmit = async (values: any) => {
        let newColumn = {
            boardId: activeBoard?._id,
            column: {
                title:values.column,
                tasks: []
            }
        }

        try {
            const response = await axios.post('/api/column', newColumn);
            if (response.status === 200) {
                dispatch(addColumn({column: response.data.data.column as columns}));
                dispatch(toggleAddColumnModal());
            } else {
                console.log('Something went wrong')
            }
        } catch(error:any) {
            console.error('Failed to create new column:', error);
        }
    };

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched }) => (
                    <Form className="space-y-4 md:space-y-6 overflow-y-auto overflow-x-hidden h-fit max-h-[40rem] px-2">
                        <h1 className="text-lg font-semibold tracking-wider mb-6">{activeBoard ? activeBoard.title : ''}</h1>
                        <div>
                            <label htmlFor="column" className="block text-xs tracking-wider font-medium mb-2">
                                Column Name
                            </label>
                            <Field
                                type="text"
                                id="column"
                                name="column"
                                placeholder="Enter name of the new column"
                                className="w-full p-2 bg-gray rounded hover:border-none appearance-none outline outline-[.25px] outline-formBorder focus:outline-darkBlue text-sm text-secondary cursor-pointer placeholder-opacity-5"
                            />
                            {errors.column && touched.column && (
                                <p className="text-red text-xs font-semibold m-1">{errors.column}</p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            primary={true}
                        >
                            <p>Add Column</p>
                        </Button>
                    </Form>
                )}
            </Formik>
        </>

    );
};

export default AddColumnForm;
