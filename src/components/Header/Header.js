import {Navbar} from "react-bootstrap";
import {LoginLink, StyledHeader} from "./HeaderStyle";
import imgLogo from "../../assets/img/guns.png"

export const Header = () => {
    return (
        <>
            <StyledHeader bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={imgLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    GunsPlace
                </Navbar.Brand>
                <LoginLink href="#">Login</LoginLink>
            </StyledHeader>
        </>
    )
}