import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, FieldArray, Field } from 'formik';
import Button from '@/components/Button';
import Image from 'next/image';
import cross from '../assets/icon-cross.svg'
import axios from 'axios'
import { columns } from '@/Types/KanbanTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard, editBoard } from '@/store/boardSlice';
import { toggleAddBoardModal } from '@/store/SidebarSlice';
import { RootState } from '@/store/store';

function AddBoardForm() {
    const isEditModeActive = useSelector((state:RootState) => state.navbar.isEditModeActive);
    const activeBoard = useSelector((state:RootState) => state.board.activeBoard);
    const dispatch = useDispatch();

    const handleSubmit = async (values: any) => {
        try {
          let newBoard = {
            title: values.title,
            columns: values.columns.map((column: string) => {
              return {
                title: column,
                tasks: [],
              };
            }),
            createdAt: Date.now()
          };
      
          if (isEditModeActive) {
            newBoard.createdAt = activeBoard!.createdAt;
            newBoard.columns = values.columns.map((title:string) => {
              let index = activeBoard!.columns.findIndex((col) => col.title === title);
              return {
                title: title,
                tasks: activeBoard?.columns[index] ? activeBoard?.columns[index].tasks :  [],
              };
            });
            console.log('handleSubmit', newBoard)
      
            const response = await axios.put('/api/board', {newBoard:newBoard, activeBoard: activeBoard});
            console.log('handleSubmit- response', response)
            dispatch(editBoard(response.data.data));
          } else {
            newBoard.createdAt = Date.now();
      
            const response = await axios.post('/api/board', newBoard);
            dispatch(addBoard(response.data.data));
          }
      
          dispatch(toggleAddBoardModal());
        } catch (error) {
          console.error('Failed to create Kanban board:', error);
        }
        console.log(values);
      };
      

    const initialValues = {
        title: isEditModeActive ? activeBoard?.title : '',
        columns: isEditModeActive ? activeBoard!.columns.map(column => column.title):['To Do', 'Doing']
    }
    
    const validationSchema = Yup.object({
        title: isEditModeActive ? Yup.string() : Yup.string().required(),
        columns: Yup.array().of(Yup.string()),
    })

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ values, errors, touched }) => (
                <Form className="space-y-6 md:space-y-6 overflow-y-auto overflow-x-hidden h-fit max-h-[25rem] px-6 mb-4">
                    <h1 className="text-xl font-semibold tracking-wider mb-4">{isEditModeActive ? 'Edit': 'Add New'} Board</h1>
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
                                        primary={false}
                                    >
                                        <p>Add New Column</p>
                                    </Button>
                                </div>
                            )}
                        </FieldArray>
                    </div>
                    <Button
                        type="submit"
                        primary={true}
                    >
                        <p>{isEditModeActive ? 'Save changes': 'Add Board'}</p>
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default AddBoardForm