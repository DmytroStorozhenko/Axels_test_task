import React, { FC, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../redux/ducks/productsList';
import { StyledNavLink } from '../styled/commonStyles';
import { ProductCard, ProductImg, ProductTitle } from '../styled/componentsStyles/ProductListStyle';

import { AppRootStateType } from '../redux/store';
import { ProductsType } from '../common/api';

export const ProductsList: FC = () => {
    const dispatch = useDispatch();
    const productList = useSelector<AppRootStateType, ProductsType>( state => state.productsList );

    useEffect( () => {
        dispatch( getProducts() )
    }, [dispatch] );

    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        productList.products.map( product => (
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
