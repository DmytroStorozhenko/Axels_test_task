import styled from 'styled-components';
import { Button, Row } from 'react-bootstrap';
import { StyledNavLink } from '../commonStyles';
import { white } from '../variables';

export const ProductInfoContainer = styled( Row )`
  align-items: center;
  margin-bottom: 30px;
`;

export const ProductItemImg = styled.img`
  width: 100%;
  margin: 30px 0;
`;

export const ProductItemDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Heading = styled.h4``

export const Description = styled.p`
  font-size: 14px;
`;

export const ProductRating = styled( Row )`
  margin-bottom: 50px;
`;
export const ProductReviews = styled( Row )`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledNavLinkArrow = styled( StyledNavLink )`
  color: ${white};
`;

export const ArrowBackButton = styled( Button )`
  font-size: 30px;
`;
