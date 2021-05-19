import { Navbar } from 'react-bootstrap';
import { LoginLink, StyledHeader } from '../styled/componentsStyles/HeaderStyle';
import imgLogo from '../assets/img/gunsLogo.png';
import { NavLink } from 'react-router-dom';

export const Header = () => (
    <>
        <StyledHeader bg="dark" variant="dark">
            <NavLink to="/">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={imgLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    GunsPlace
                </Navbar.Brand>
            </NavLink>
            <LoginLink to={"/login"}>Login</LoginLink>
        </StyledHeader>
    </>
)