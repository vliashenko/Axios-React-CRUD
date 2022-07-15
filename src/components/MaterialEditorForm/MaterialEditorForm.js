import React from 'react';
import { Formik, Form, Field } from "formik";

const MaterialEditorForm = ({ onSubmit }) => {

    const handleSubmit = (values, { resetForm, setSubmitting }) => {
        onSubmit(values)
            .then(() => setSubmitting(false));
        resetForm();
    }

    return (
        <Formik 
            initialValues={{title: "", link: ""}} 
            onSubmit={ handleSubmit }
        >
            {({ isSubmitting }) =>  (
                 <Form>
                    <label>
                        Title
                            <Field
                            name="title"
                            type="text"
                            style={{border: "1px solid"}}
                            />
                    </label>
                    <label>
                        Link
                            <Field
                            name="link"
                            type="url"
                            style={{border: "1px solid"}}
                            />
                    </label>
                    <button 
                        disabled={isSubmitting}
                        type="submit">
                        Add materials
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default MaterialEditorForm;