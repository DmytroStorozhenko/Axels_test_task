import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';

import { ErrorBlock, ReviewButton } from '../styled/componentsStyles/ReviewFormStyle';
import { addReviewActionType } from '../redux/ducks/product';

type ReviewPropsType = {
    submitHandler: (review: string) => addReviewActionType
}

type FormValuesType = {
    review: string
}

export const ReviewForm = (props: ReviewPropsType) =>
    <>
        <Formik
            initialValues={{ review: '' }}
            validationSchema={Yup.object( {
                review: Yup.string()
                    .max( 300, 'Длинна отзыва не должна превышать 300 символов' )
                    .required( 'Отзыв не должен быть пустым' ),
            } )}
            onSubmit={(values, { setSubmitting, resetForm }: FormikHelpers<FormValuesType>) => {
                props.submitHandler( values.review )
                setSubmitting( false )
                resetForm( {} )
            }}>
            {({
                  handleSubmit,
                  getFieldProps,
                  touched,
                  errors
              }) => (
                <Form
                    noValidate
                    onSubmit={handleSubmit}>
                    <Form.Control
                        as="textarea"
                        type="textarea"
                        cols={80} rows={2}
                        isInvalid={!!errors.review}
                        {...getFieldProps( 'review' )}/>
                    {touched.review && errors.review ? (
                        <ErrorBlock>{errors.review}</ErrorBlock>
                    ) : null}
                    <ReviewButton type="submit">Оставить отзыв</ReviewButton>
                </Form>
            )
            }
        </Formik>
    </>;
