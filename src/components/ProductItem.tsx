import React, { FC, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
import { Rating, ReviewForm } from './index';
import { addReview, getProduct } from '../redux/ducks/product';

import { AppRootStateType } from '../redux/store';
import { ProductItemType } from '../common/api';

export const ProductItem: FC = () => {
    const dispatch = useDispatch();
    const product = useSelector<AppRootStateType, ProductItemType>( state => state.product );
    const { img, name, description, rating, reviews } = product;
    const submitHandler = (review: string) => dispatch( addReview( review ) );

    let { id } = useParams<{ id?: string | undefined }>();

    useEffect( () => {
        if (id === undefined) id = '0'
        dispatch( getProduct( Number( id ) ) )
    }, [dispatch] );

    return (
        <>
            {
                <Container>
                    <StyledNavLinkArrow to={'/'}>
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
                        <ReviewForm submitHandler={submitHandler}/>
                    </ProductReviews>
                </Container>
            }
        </>
    )
};
