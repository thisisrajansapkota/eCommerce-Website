import React from 'react'
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config/config';
import { setUser } from '../../redux/auth/userSlice';
import { signOut } from 'firebase/auth';

function Header() {
const { user } = useSelector(state => state.userInfo);
const dispatch = useDispatch();
const handleLogout =  () => {
  // clear firebase AUth session and redux state
signOut(auth).then(() => {
 dispatch (setUser({}))
})
  }
  return (
    <Navbar expand="lg" bg="info" variant="info">
      <Container>
        <Navbar.Brand href="#home">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user.uid ? (
              <>
                <Link to="/profile" className="nav-link">
                  {user.fName}'s Profile 
                </Link>
                <Link to="/#" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
             
              </>
            ) 
            
            : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}

            {/*To Do: Change links to logout once auth implemented.  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header