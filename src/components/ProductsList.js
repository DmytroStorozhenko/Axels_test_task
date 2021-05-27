import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../redux/ducks/productsList';
import { store } from '../redux/store';
import { StyledNavLink } from '../styled/commonStyles';
import { ProductCard, ProductImg, ProductTitle } from '../styled/componentsStyles/ProductListStyle';

export const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector( () => store.getState().productsList.products);

    useEffect( () => {
        dispatch( getProducts() )
    },[dispatch] );

    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        products.map( product => (
                                <Col key={product.id}>
                                    <StyledNavLink to={`/item/${product.id}`}
                                                   style={{ textDecoration: 'none' }}>
                                        <ProductCard>
                                            <ProductImg variant="top" src={product.img}/>
                                            <Card.Body>
                                                <ProductTitle as="p">{product.name}</ProductTitle>
                                            </Card.Body>
                                        </ProductCard>
                                    </StyledNavLink>
                                </Col>
                            )
                        )
                    }
                </Row>
            </Container>
        </>
    )
};
