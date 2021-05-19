import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const ProductInfoContainer = styled(Row)`
  align-items: center;
  margin-bottom: 30px;
`

export const ProductItemImg = styled.img`
  width: 100%;
`

export const ProductItemDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const Heading = styled.h4``

export const Description = styled.p`
  font-size: 14px;
`

export const ProductRating = styled(Row)`
  margin-bottom: 50px;
`
export const ProductReviews = styled(Row)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
