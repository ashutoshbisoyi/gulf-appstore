import React from 'react';
import { Nav, Form, FormControl, Navbar, NavDropdown } from 'react-bootstrap';
import {
  AiOutlineMobile,
  AiOutlineBell,
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiFillAppstore,
} from 'react-icons/ai';

const Navigation = () => {
  return (
    <Navbar expand='lg' className='navigation'>
      <Navbar.Brand href='#home'>
        <AiFillAppstore className='icon' />
        App Store
      </Navbar.Brand>
      <Form inline>
        <FormControl
          type='text'
          placeholder='Search Apps'
          className='mr-sm-2 rounded-pill'
        />
      </Form>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav>
          <Nav.Link href='#' className='mx-md-2'>
            <AiOutlineMobile className='icon' /> Download App
          </Nav.Link>
          <Nav.Link href='#' className='mx-md-2'>
            <AiOutlineBell className='icon' />
            Notification
          </Nav.Link>
          <Nav.Link href='#' className='mx-md-2'>
            <AiOutlineQuestionCircle className='icon' />
            Help
          </Nav.Link>
          <Nav.Link href='#' className='mx-md-2'>
            <AiOutlineUser className='icon' />
            My Account
          </Nav.Link>
          <Nav.Link href='#' className='mx-md-2'>
            <div className='avatar'>A</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
