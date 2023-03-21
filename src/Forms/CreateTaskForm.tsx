import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import { useSelector } from 'react-redux';

const initialValues = {
    title: '',
    description: '',
    status: 'To Do',
    subtasks: ['']
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string(),
    status: Yup.string().required('Status is required'),
    subtasks: Yup.array().of(Yup.string()),
})

const colors = {
    white: 'white',
    lightBlue: 'lightBlue',
    darkBlue: 'darkBlue',
    gray: 'gray'
}

const CreateTaskForm = ({ columns }: {
    columns: any
}) => {
    const handleSubmit = (values: any) => {
        // Handle form submission logic here
        console.log(values);
    };


    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched }) => (
                    <Form className="space-y-5 overflow-y-auto h-fit max-h-[40rem] px-6 py-4">
                        <h1 className="text-xl font-semibold tracking-wider mb-4">Add New Task</h1>
                        <div>
                            <label htmlFor="title" className="block text-xs tracking-wider font-medium mb-2">
                                Task Name
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
                            <label htmlFor="description" className="block text-xs tracking-wider font-medium mb-2">
                                Description
                            </label>
                            <Field
                                as="textarea"
                                id="description"
                                name="description"
                                placeholder="e.g. It's always good to take a break. This  15 minute break will  recharge the batteries  a little."
                                className="w-full px-4 py-2 h-36 border-none rounded bg-gray outline outline-[.25px] outline-formBorder focus:outline-darkBlue text-sm text-secondary cursor-pointer"
                                rows="3"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2 text-xs tracking-wider">Subtasks</label>
                            <FieldArray name="subtasks">
                                {({ push, remove }) => (
                                    <div className="space-y-2">
                                        {values.subtasks.map((_, index) => (
                                            <div key={index} className="flex items-center gap-4">
                                                <Field
                                                    key={index}
                                                    type="text"
                                                    name={`subtasks.${index}`}
                                                    className="w-full p-2 border-none rounded bg-gray outline outline-[.25px] outline-formBorder  focus:outline-darkBlue text-sm text-secondary cursor-pointer"
                                                    placeholder={`Subtask ${index + 1}`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                    className="px-2 py-1 text-secondary text-2xl font-bold"
                                                >
                                                    х
                                                </button>
                                            </div>

                                        ))}
                                        <Button
                                            onClick={() => push('')}
                                            value={'Add New Subtask'}
                                            stylings={`bg-white text-darkBlue`}
                                        />
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-xs tracking-wider font-medium mb-2">
                                Current status
                            </label>
                            <Field as="select" id="status" name="status"
                                className="w-full p-2 border border-gray-300 rounded bg-gray cursor-pointer outline outline-[.25px] outline-formBorder  focus:outline-darkBlue text-sm">
                                {columns.map((el, index) => (
                                    <option key={index} className="bg-gray text-white">
                                        {el}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <Button
                            type="submit"
                            value={'Add task'}
                            stylings={`bg-darkBlue text-white`}
                        />
                    </Form >
                )}
            </Formik >
        </ >

    );
};

export default CreateTaskForm;
