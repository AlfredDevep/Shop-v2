import { Navbar, Nav, Container } from 'react-bootstrap';
import { Cart, Person } from 'react-bootstrap-icons'; // Import icons from 'react-bootstrap-icons'
import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

export const Header = () => {
  return (
    <>
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img src={logo} alt="" />
                            ProShop
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link className="nav-link"><Cart/>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link className='nav-link'><Person/>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </>
  )
}
