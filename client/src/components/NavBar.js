import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: "white", textDecoration: 'none' }} to={SHOP_ROUTE} >DeviceStore</NavLink>
                {user.isAuth ? <Nav className="ml-auto" style={{ color: "white" }}>
                        <Nav.Link>Admin Panel</Nav.Link>
                        <Nav.Link>Log Out</Nav.Link>
                    </Nav> : <Nav className="ml-auto" style={{ color: "white" }}>
                        <Nav.Link onClick={() => { user.setIsAuth(true); }}>Authorization</Nav.Link>
                    </Nav>
                }
                
            </Container>
        </Navbar>
    );
})

export default NavBar;
