import styled from "styled-components";
import {Navbar} from "react-bootstrap";

export const StyledHeader = styled(Navbar)`
  margin-bottom: 30px;
  justify-content: space-between;
`

export const LoginLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`