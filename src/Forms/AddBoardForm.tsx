import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, FieldArray, Field } from 'formik';
import Button from '@/components/Button';
import Image from 'next/image';
import cross from '../assets/icon-cross.svg'
import axios from 'axios'


const initialValues = {
    title: '',
    columns: ['To Do', 'Doing']
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    columns: Yup.array().of(Yup.string()),
})

const colors = {
    white: 'white',
    lightBlue: 'lightBlue',
    darkBlue: 'darkBlue',
    gray: 'gray'
}

function AddBoardForm({ setBoards, boards }: {
    setBoards: any,
    boards: any
}) {
    const deleteKanbanBoard = async (boardId: String) => {
        try {
            const response = await axios.delete(`/api/board?id=${boardId}`);
            if (response.status === 200) {
                console.log('Kanban board deleted successfully:', response.data.data);
                setBoards(prev => {
                    return prev.map(board => board !== boardId)
                })
            } else {
                console.error('Error deleting Kanban board:', response.data.message);
            }
        } catch (error) {
            console.error('Failed to delete Kanban board:', error);
        }
    };

    const handleSubmit = async (values: any) => {
        const newBoard = {
            id: values.title,
            columns: values.columns.map((el, index) => {
                return {
                    id: index + 1,
                    title: el,
                    tasks: []
                }
            }),
        };
        console.log('handleSubmit: ', newBoard)
        try {
            const response = await axios.post('/api/board', newBoard);
            setBoards(prev => {
                return [
                    response.data.data
                ]
            });
        } catch (error) {
            deleteKanbanBoard(newBoard.id)
            console.error('Failed to create Kanban board:', error);
        }
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ values, errors, touched }) => (
                <Form className="space-y-6 md:space-y-6 overflow-y-auto overflow-x-hidden h-fit max-h-[25rem] px-6 mb-4">
                    <h1 className="text-xl font-semibold tracking-wider mb-4">Add New Board</h1>
                    <div>
                        <label htmlFor="title" className="block text-xs tracking-wider font-medium mb-2">
                            Board Name
                        </label>
                        <Field
                            type="text"
                            id="title"
                            name="title"
                            placeholder="e.g. Take a coffee break"
                            className="w-full p-2 bg-gray rounded hover:border-none appearance-none outline outline-[.25px] outline-formBorder focus:outline-darkBlue text-sm text-secondary cursor-pointer placeholder-opacity-5"
                        />
                        {errors.title && touched.title && (
                            <p className="text-red text-xs font-semibold m-1">{errors.title}</p>
                        )}
                    </div>
                    <div>
                        <label className="block font-medium mb-2 text-xs tracking-wider">Columns</label>
                        <FieldArray name="columns">
                            {({ push, remove }) => (
                                <div className="space-y-4">
                                    {values.columns.map((_, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <Field
                                                key={index}
                                                type="text"
                                                name={`columns.${index}`}
                                                className="w-full p-2 border-none rounded bg-gray outline outline-[.25px] outline-formBorder  focus:outline-darkBlue text-sm text-secondary cursor-pointer"
                                                placeholder={`Column ${index + 1}`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                                className="px-2 py-1 text-secondary text-2xl font-bold"
                                            >
                                                <Image src={cross} alt="delete" />
                                            </button>
                                        </div>

                                    ))}
                                    <Button
                                        onClick={() => push('')}
                                        value={'Add New Column'}
                                        stylings={`bg-${colors.white} text-${colors.darkBlue} font-bold`}
                                    />
                                </div>
                            )}
                        </FieldArray>
                    </div>
                    <Button
                        type="submit"
                        triggerEvent={null}
                        value="Add Board"
                        stylings={`bg-${colors.darkBlue} text-${colors.white} font-bold`}
                    />
                </Form>
            )}
        </Formik>
    )
}

export default AddBoardForm