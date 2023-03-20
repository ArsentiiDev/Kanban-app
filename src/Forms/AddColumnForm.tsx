import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/Button';
import cross from '../assets/icon-cross.svg'
import Image from 'next/image';

const initialValues = {
    boardName: 'Current Board Name',
    columns: ['Existing Column 1'],
};

const validationSchema = Yup.object({
    boardName: Yup.string().required('Board name is required'),
    columns: Yup.array().of(Yup.string().required('Column name is required')),
});

const colors = {
    white: 'white',
    lightBlue: 'lightBlue',
    darkBlue: 'darkBlue',
    gray: 'gray'
}

const AddColumnForm = () => {
    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
    };

    return (
        <div className="">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched }) => (
                    <Form className="space-y-4 md:space-y-6 overflow-y-auto overflow-x-hidden h-fit max-h-[40rem] px-2">
                        <h1 className="text-xl font-semibold tracking-wider mb-4">Edit Board</h1>
                        <div>
                            <label htmlFor="boardName" className="block text-xs tracking-wider font-medium mb-2">
                                Board name
                            </label>
                            <Field
                                type="text"
                                id="boardName"
                                name="boardName"
                                className="w-full p-2 rounded bg-gray hover:border-none appearance-none outline outline-[.25px] outline-formBorder focus:outline-darkBlue text-sm text-secondary cursor-pointer placeholder-opacity-5"
                            />
                            {errors.boardName && touched.boardName && (
                                <p className="text-red text-xs">{errors.boardName}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-xs tracking-wider font-medium mb-2">Board columns</label>
                            <FieldArray name="columns">
                                {({ push, remove }) => (
                                    <div className="space-y-2">
                                        {values.columns.map((_, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <Field
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
                                            bgColor={colors.white}
                                            textColor={colors.lightBlue}
                                            value='Add Column'
                                        />
                                    </div>
                                )}
                            </FieldArray>
                        </div>
                        <Button
                            type='submit'
                            value='Save Changes'
                            bgColor={colors.darkBlue}
                        />
                    </Form>
                )}
            </Formik>
        </div>

    );
};

export default AddColumnForm;