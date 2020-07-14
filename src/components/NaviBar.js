import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';


const navStyle = {
    backgroundColor: '#36393f'

};
const textColor ={
    color: 'white'
}



export const NaviBar = () => (

<Navbar expand="lg" style={navStyle}>
    <Navbar.Brand href="/" style={textColor}>Kristopher Vala</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m1-auto">
        <Nav.Item><Nav.Link href="/" style={textColor}>Home</Nav.Link> </Nav.Item>
        <Nav.Item><Nav.Link href="/About" style={textColor}>About</Nav.Link> </Nav.Item>
        <Nav.Item><Nav.Link href="/Projects" style={textColor}>Projects</Nav.Link> </Nav.Item>

    </Nav>

    </Navbar.Collapse>

</Navbar>


)