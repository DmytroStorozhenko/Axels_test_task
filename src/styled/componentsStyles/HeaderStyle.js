import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { white } from '../variables';

export const StyledHeader = styled( Navbar )`
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const LoginLink = styled( NavLink )`
  color: ${white};
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    color: ${white};
    text-decoration: none;
    cursor: pointer;
  }
`;
