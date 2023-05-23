import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./Navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
function Navb({ changePage }) {
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  function clickHandler(e) {
    changePage(e.target.name)
  }
  function logoutHandler() {
    removeCookie('user', null);
    removeCookie("token", null);
    navigate("/")
  }
  return (
    <>
      {cookie.user.userType === "student" ?
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/" style={{ marginLeft: "-60px" }}>ITS Freelance</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className='nvbar-margin' name="profile" onClick={() => { navigate("/profile") }}>Profile</Nav.Link>
              <Nav.Link className='nvbar-margin' name="btasks" onClick={() => { navigate("/browsetasks") }} >Browse Tasks</Nav.Link>
              <Nav.Link className='nvbar-margin' name="mtasks" onClick={() => { navigate("/mytasks") }} >My Tasks</Nav.Link>
              <Nav.Link className='nvbar-margin' name="feedback" onClick={() => { navigate("/feedback") }} >Feedback</Nav.Link>
            </Nav>
            <Nav className="me">
              <Nav.Link onClick={logoutHandler} style={{ marginRight: "-80px" }}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        : cookie.user.userType === "company" ?
          //////
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/" style={{ marginLeft: "-60px" }}>ITS Freelance</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className='nvbar-margin' name="profile" onClick={() => { navigate("/profile") }}>Profile</Nav.Link>
                <Nav.Link className='nvbar-margin' name="mtasks" onClick={() => { navigate("/mytasks") }} >My Tasks</Nav.Link>
                <Nav.Link className='nvbar-margin' name="feedback" onClick={() => { navigate("/feedback") }} >Feedback</Nav.Link>
              </Nav>
              <Nav className="me">
                <Nav.Link onClick={logoutHandler} style={{ marginRight: "-80px" }}>Logout</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          : cookie.user.userType === "doctor" ?
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand href="/" style={{ marginLeft: "-60px" }}>ITS Freelance</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link className='nvbar-margin' name="profile" onClick={() => { navigate("/profile") }}>Profile</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="students" onClick={() => { navigate("/BrowseStudents") }}>Students</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="companies" onClick={() => { navigate("/BrowseCompanies") }}>Companies</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="feedback" onClick={() => { navigate("/feedback") }} >Feedback</Nav.Link>
                </Nav>
                <Nav className="me">
                  <Nav.Link onClick={logoutHandler} style={{ marginRight: "-80px" }}>Logout</Nav.Link>

                </Nav>
              </Container>
            </Navbar> : <></>
      }
    </>
  );
}

export default Navb;