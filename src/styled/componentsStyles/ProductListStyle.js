import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const ProductCard = styled(Card)`
  min-height: 200px;
  box-sizing: border-box;
  transition: box-shadow 0.4s ease-in-out;
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`

export const ProductImg = styled(Card.Img)`
  width: 250px;
  margin: 30px 20px 0;
`

