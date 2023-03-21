import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/Button';
import cross from '../assets/icon-cross.svg'
import Image from 'next/image';
import { useSelector } from 'react-redux';





const colors = {
    white: 'white',
    lightBlue: 'lightBlue',
    darkBlue: 'darkBlue',
    gray: 'gray'
}

const AddColumnForm = ({ setColumns, columns, boardName }: {
    setColumns: any,
    columns: any,
    boardName: any
}) => {

    const initialValues = {
        columns: [''],
    };

    const validationSchema = Yup.object({
        columns: Yup.array().of(Yup.string()),
    });

    const handleSubmit = (values) => {
        console.log(values)

        let normalised = values.columns.map((column, index) => { //move to utils
            return {
                id: columns.length + index + 1,
                title: column,
                tasks: [],
            }
        })

        // Handle form submission logic here
        setColumns((prev: any) => {

            return [...prev, ...normalised]
        })
        console.log(values);
    };


    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched }) => (
                    <Form className="space-y-4 md:space-y-6 overflow-y-auto overflow-x-hidden h-fit max-h-[40rem] px-2">
                        <h1 className="text-xl font-semibold tracking-wider mb-4">Add Column</h1>
                        <div>
                            <label className="block text-xs tracking-wider font-medium mb-2">Board columns</label>
                            <FieldArray name="columns">
                                {({ push, remove }) => (
                                    <div className="space-y-2">
                                        {values.columns.map((_, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-2">
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
                                                    className="px-2 py-1 cursor-pointer"
                                                >
                                                    <Image src={cross} alt="delete" />
                                                </button>
                                            </div>
                                        ))}
                                        <Button
                                            onClick={() => push('')}
                                            value='Add Column'
                                            stylings={`bg-white text-lightBlue`}
                                        />
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                        <Button
                            type="submit"
                            value="Save Changes"
                            stylings={`bg-darkBlue text-white`}
                        />
                    </Form>
                )}
            </Formik>
        </>

    );
};

export default AddColumnForm;
