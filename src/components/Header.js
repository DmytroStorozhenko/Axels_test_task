import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/img/gunsLogo.png';

import { LoginLink, StyledHeader } from '../styled/componentsStyles/HeaderStyle';

export const Header = () => (
    <>
        <StyledHeader bg="dark" variant="dark">
            <NavLink to="/">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={Logo}
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
);
