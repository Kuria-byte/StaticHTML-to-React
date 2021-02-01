import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import './Header.css'
import { ReactComponent as Logo} from '../src/Images/logo1.svg'

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
 

function Header () {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand className='navbar' style={{ paddingLeft: '3em' }} href='#home'>
         <Logo></Logo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>
              Shop
            </Nav.Link>
            <Nav.Link href='#link'>
              Contact
            </Nav.Link>
  
          </Nav>

          <IconButton aria-label='cart'>
            <StyledBadge badgeContent={4} color='secondary'>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>

          <Form className='navbar' inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>
              Search
            </Button>
          </Form>
       
          <div style={{ paddingRight: '3em' }}>
            <Button variant='outline-success'>
              LogIn
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
