import React, { useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { routes } from '../common/routes';
import { addReview, getProduct } from '../redux/productReducer';
import { store } from '../redux/store';

import {
    ArrowBackButton,
    Description,
    Heading,
    ProductInfoContainer,
    ProductItemDescription,
    ProductItemImg,
    ProductRating,
    ProductReviews,
    StyledNavLinkArrow
} from '../styled/componentsStyles/ProductItemStyle';
import { Rating } from './Raiting';
import { ReviewForm } from './ReviewForm';

export const ProductItem = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector( () => store.getState().product );
    const { img, name, description, rating, reviews } = product;

    useEffect( () => {
        dispatch( getProduct( id ) )
    }, [dispatch] );

    const submitHandler = (review) => dispatch(addReview([review]))

    return (
        <>
            <Container>
                <StyledNavLinkArrow to={routes.productList}>
                    <ArrowBackButton variant="dark" size="sm">&#60;</ArrowBackButton>
                </StyledNavLinkArrow>
                <ProductInfoContainer lg={11}>
                    <Col sm={10} md={6} lg={6}>
                        <ProductItemImg src={img}/>
                    </Col>
                    <Col sm={10} md={6} lg={6}>
                        <ProductItemDescription>
                            <Heading>{name}</Heading>
                            <Description>{description}</Description>
                        </ProductItemDescription>
                    </Col>
                </ProductInfoContainer>
                <ProductRating lg={10}>
                    <Col>
                        <div>
                            <h4>Оценка: {rating}</h4>
                        </div>
                        <Rating/>
                    </Col>
                </ProductRating>
                <ProductReviews sm={10} lg={12}>
                    <h5>Отзывы:</h5>
                    {!reviews ? '' :
                        reviews.length !== 0 ?
                            reviews.map( (review, index) => (
                                    <p key={index}>{review}</p>
                                )
                            ) :
                            <p>Нет отзывов...</p>
                    }
                    <ReviewForm submitHandler={submitHandler} />
                </ProductReviews>
            </Container>
        </>
    )
};
