import React from 'react';
import Nav from 'react-bootstrap/Nav';

const LeftMenu = () => {
    return (
        <Nav className="flex-column">
            <Nav.Link href="/home"><h1>Home</h1> </Nav.Link>
            <Nav.Link href="/about"><h1>About</h1></Nav.Link>
            <Nav.Link href="/contacts"><h1>Contact</h1></Nav.Link>
        </Nav>
    );
};

export default LeftMenu;