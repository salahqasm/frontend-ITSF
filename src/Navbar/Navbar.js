import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./Navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import { useCookies } from 'react-cookie';
function Navb({ changePage }) {
  const [cookie] = useCookies();
  function clickHandler(e) {
    changePage(e.target.name)
  }
  return (
    <>
      {cookie.user.userType == "student" ?
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" style={{ marginLeft: "-60px" }}>ITS Freelance</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className='nvbar-margin' name="profile" onClick={(e) => { clickHandler(e) }}>Profile</Nav.Link>
              <Nav.Link className='nvbar-margin' name="btasks" onClick={(e) => { clickHandler(e) }} >Browse Tasks</Nav.Link>
              <Nav.Link className='nvbar-margin' name="mtasks" onClick={(e) => { clickHandler(e) }} >My Tasks</Nav.Link>
              <Nav.Link className='nvbar-margin' name="feedback" onClick={(e) => { clickHandler(e) }} >Feedback</Nav.Link>
            </Nav>
            <Nav className="me">
              <Nav.Link href="#home" style={{ marginRight: "-80px" }}>Logout</Nav.Link>

            </Nav>
          </Container>
        </Navbar>
        : cookie.user.userType == "company" ?
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">ITS Freelance</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link className='nvbar-margin' name="profile" onClick={(e) => { clickHandler(e) }}>Profile</Nav.Link>
                <Nav.Link className='nvbar-margin' name="mtasks" onClick={(e) => { clickHandler(e) }} >My Tasks</Nav.Link>
                <Nav.Link className='nvbar-margin' name="feedback" onClick={(e) => { clickHandler(e) }} >Feedback</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          : cookie.user.userType == "doctor" ?
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home" style={{ marginLeft: "-60px" }}>ITS Freelance</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link className='nvbar-margin' name="profile" onClick={(e) => { clickHandler(e) }}>Profile</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="btasks" onClick={(e) => { clickHandler(e) }} >Browse Tasks</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="companies" onClick={(e) => { clickHandler(e) }}>Companies</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="students" onClick={(e) => { clickHandler(e) }}>Students</Nav.Link>
                  <Nav.Link className='nvbar-margin' name="feedback" onClick={(e) => { clickHandler(e) }} >Feedback</Nav.Link>

                </Nav>
                <Nav className="me">
                  <Nav.Link href="#home" style={{ marginRight: "-80px" }}>Logout</Nav.Link>

                </Nav>
              </Container>
            </Navbar> : <></>
      }
    </>
  );
}

export default Navb;