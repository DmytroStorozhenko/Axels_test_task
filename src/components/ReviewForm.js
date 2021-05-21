import { Form } from 'react-bootstrap';

import { ReviewButton } from '../styled/componentsStyles/ReviewFormStyle';

export const ReviewForm = () => (
    <Form>
        <Form.Control as="textarea" cols={80} rows={2}/>
        <ReviewButton type="submit">Оставить отзыв</ReviewButton>
    </Form>
);
