import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
import { routes } from '../common/routes';
import { store } from '../redux/store';

import {
    ArrowBackButton,
    Description,
    Heading,
    ProductInfoContainer,
    ProductItemDescription,
    ProductItemImg,
    ProductRating,
    ProductReviews, StyledNavLinkArrow
} from '../styled/componentsStyles/ProductItemStyle';
import { Rating } from './Raiting';
import { ReviewForm } from './ReviewForm';

export const ProductItem = () => {
    const { id } = useParams();
    const product = useSelector( () => store.getState().productsList.products[id]);
    const { name, img, description, rating, reviews } = product;

    return (
        <>
            <Container>
                <StyledNavLinkArrow to={routes.productList}>
                    <ArrowBackButton variant="dark" size="sm">&#60;</ArrowBackButton>
                </StyledNavLinkArrow>
                <ProductInfoContainer lg={11}>
                    <Col sm={11} md={6} lg={6}>
                        <ProductItemImg src={img}/>
                    </Col>
                    <Col sm={11} md={6} lg={6}>
                        <ProductItemDescription>
                            <Heading>{name}</Heading>
                            <Description>{description}</Description>
                        </ProductItemDescription>
                    </Col>
                </ProductInfoContainer>
                <ProductRating lg={12}>
                    <Col>
                        <div>
                            <h4>Оценка: {rating}</h4>
                        </div>
                        <Rating/>
                    </Col>
                </ProductRating>
                <ProductReviews lg={12}>
                    <h5>Отзывы:</h5>
                    {
                        reviews.map( (review, index) => (
                                <p key={index}>{review}</p>
                            )
                        )
                    }
                    <ReviewForm/>
                </ProductReviews>
            </Container>
        </>
    )
};
