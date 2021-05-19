import { Card, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { ProductCard, ProductImg } from '../styled/componentsStyles/ProductListStyle';

import { state } from '../state/temporary_state';

export const ProductsList = () => {
    const products = state.products;

    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        products.map( product => (
                                <Col>
                                    <NavLink to={`/item/${product.id}`}>
                                        <ProductCard
                                            key={product.id}>
                                            <ProductImg variant="top" src={product.img}/>
                                            <Card.Body>
                                                <Card.Title as="p">{product.name}</Card.Title>
                                            </Card.Body>
                                        </ProductCard>
                                    </NavLink>
                                </Col>
                            )
                        )
                    }
                </Row>
            </Container>
        </>
    )
};
