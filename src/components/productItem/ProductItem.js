import {Col, Container} from "react-bootstrap";
import {state} from "../../state/temporary_state";
import {
    Description,
    Heading,
    ProductInfoContainer,
    ProductItemDescription,
    ProductItemImg,
    ProductRating,
    ProductReviews
} from "./ProductItemStyle";
import {Rating} from "../Raiting/Raiting";
import {ReviewForm} from "../ReviewForm/ReviewForm";

export const ProductItem = () => {
    const {id, name, img, description, rating, reviews} = state.products[0]
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
                        reviews.map(review => (
                                <p>{review}</p>
                            )
                        )
                    }
                    <ReviewForm />
                </ProductReviews>
            </Container>

        </>
    )
}