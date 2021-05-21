import { useParams } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';

import {
    Description,
    Heading,
    ProductInfoContainer,
    ProductItemDescription,
    ProductItemImg,
    ProductRating,
    ProductReviews
} from '../styled/componentsStyles/ProductItemStyle';
import { Rating } from './Raiting';
import { ReviewForm } from './ReviewForm';

import { state } from '../state/temporary_state';

export const ProductItem = () => {
    const { id } = useParams();
    const item = state.products[id];
    const { name, img, description, rating, reviews } = item;

    return (
        <>
            <Container>
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
                        reviews.map( review => (
                                <p>{review}</p>
                            )
                        )
                    }
                    <ReviewForm/>
                </ProductReviews>
            </Container>
        </>
    )
};
