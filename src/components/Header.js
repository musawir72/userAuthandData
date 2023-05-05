import { useSelector,useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../slice/authSlice'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  
  const {  userInfo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          {userInfo ? (
            <NavLink className='button' onClick={() => dispatch(logout())}>
              Logout
            </NavLink>
          ) : (
            <NavLink className='button' to='/login'>
              Login
            </NavLink>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header