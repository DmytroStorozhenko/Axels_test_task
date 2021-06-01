import React, { FC } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { StyledHeader } from '../styled/componentsStyles/HeaderStyle';

import Logo from '../assets/img/gunsLogo.png';

export const Header: FC = () => (
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
        </StyledHeader>
    </>
);
