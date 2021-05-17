import {Form} from "react-bootstrap";
import {ReviewButton, ReviewInput} from "./ReviewFormStyle";

export const ReviewForm = () => {
    return (
        <Form>
            <Form.Control as="textarea" cols={80} rows={2}/>
            <ReviewButton type="submit">Оставить отзыв</ReviewButton>
        </Form>
    )
}