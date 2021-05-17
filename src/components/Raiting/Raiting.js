import {Button, Col, Form} from "react-bootstrap";

export const Rating = () => {
    return (
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto" className="my-1">
                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                        Preference
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        custom
                    >
                        <option value="0">...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit">Поставить оценку</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}