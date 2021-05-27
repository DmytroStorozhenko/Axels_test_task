import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';

import { ErrorBlock, ReviewButton } from '../styled/componentsStyles/ReviewFormStyle';

export const ReviewForm = (props) =>
    <>
        <Formik
            initialValues={{ review: '' }}
            validationSchema={Yup.object( {
                review: Yup.string()
                    .max( 300, 'Длинна отзыва не должна превышать 300 символов' )
                    .required( 'Отзыв не должен быть пустым' ),
            } )}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                props.submitHandler( values.review )
                setSubmitting( false )
                resetForm( '' )
            }}>
            {({
                  handleSubmit,
                  getFieldProps,
                  touched,
                  errors
              }) => (
                <Form
                    noValidate
                    onSubmit={handleSubmit}
                    name="review"
                    type="textarea">
                    <Form.Control
                        as="textarea"
                        name="review"
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
