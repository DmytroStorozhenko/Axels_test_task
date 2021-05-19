import { Card, Col, Container, Row } from 'react-bootstrap';
import { state } from '../state/temporary_state';
import { ProductCard, ProductImg } from '../styled/componentsStyles/ProductListStyle';
import { NavLink } from 'react-router-dom';

export const ProductsList = () => {
    const products = state.products

    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        products.map(product => (
                                <Col>
                                    <NavLink to={`/item/${product.id}`}>
                                        <ProductCard
                                            key={product.id}
                                            style={{width: '18rem'}}>
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
}