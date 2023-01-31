import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
function Signup() {
  return (
    <div class="main">
      <div class="signup-outerdiv">
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="radio"
              value="Student"
              id="Student"
              label="Student"
              name="userType"
            />
            <Form.Check
              type="radio"
              value="Company"
              id="Company"
              label="Company"
              name="userType"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
            <Form.Label>Second Name</Form.Label>
            <Form.Control type="text" placeholder="Second Name" />
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />

            <Form.Label>Skills</Form.Label>
            <Form.Control type="text" placeholder="At least one skill" />

            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
