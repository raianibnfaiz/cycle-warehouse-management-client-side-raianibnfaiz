import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    //const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
        //navigate('/login');
    }
    return (
        <div className='headerNavbar'>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Bicycle Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='home' href="/home">Home</Nav.Link>

                        </Nav>

                        <Nav>

                            {

                                user &&
                                <>
                                    <Nav.Link as={Link} to="addProduct" href='/addProduct'>Add Products</Nav.Link>
                                    <Nav.Link as={Link} to="manageInventories" href='manageInventories'>Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="myItems" href='/myItems'>My Items</Nav.Link>

                                </>
                            }
                            <Nav.Link as={Link} to="blogs" href='/blogs'>Blogs</Nav.Link>

                            {
                                user ?

                                    <Nav.Link as={Link} to="login" href='/login'><button className='btn btn-warning mx-auto ' onClick={handleSignOut}>Logout</button></Nav.Link> :
                                    <Nav.Link as={Link} to="login" href='/login'>Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="about" href='/about'>About</Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;