import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useNavigate();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: "white", textDecoration: 'none' }} to={SHOP_ROUTE}>DeviceStore</NavLink>
                {user.isAuth ? <Nav className="ml-auto" style={{ color: "white" }}>
                    <Nav.Link onClick={() => history(ADMIN_ROUTE, {replace: true}) }>Admin Panel</Nav.Link>
                        <Nav.Link onClick={() => history(LOGIN_ROUTE, {replace: true})}>Log Out</Nav.Link>
                    </Nav> : <Nav className="ml-auto" style={{ color: "white" }}>
                        <Nav.Link onClick={() => { user.setIsAuth(true); }}>Authorization</Nav.Link>
                    </Nav>
                }
                
            </Container>
        </Navbar>
    );
})

export default NavBar;
