import {Card, Col, Container, Row} from "react-bootstrap";
import {state} from "../../state/temporary_state";
import {ProductItem} from "../productItem/ProductItem";
import {ProductCard, ProductImg} from "./ProductListStyle";

export const ProductsList = () => {
    const products = state.products
    const onDisplayProduct = (product) => {
        return (
            <ProductItem product={product}/>
        )
    }

    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        products.map(product => (
                            <Col>
                                <ProductCard
                                    key={product.id}
                                    style={{width: '18rem'}}
                                    onClick={() => onDisplayProduct(product)}>
                                    <ProductImg variant="top" src={product.img}/>
                                    <Card.Body>
                                        <Card.Title as="p">{product.name}</Card.Title>
                                    </Card.Body>
                                </ProductCard>
                            </Col>
                            )
                        )
                    }
                </Row>
            </Container>
        </>
    )
}