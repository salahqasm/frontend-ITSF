import { useState } from "react";
import "./Signup.css";
function Signup() {
 
  const [user, setUser] = useState("student");
 
  function handleChange(e){
    console.log(e.target.value);
    if(e.target.value=="student")
    {
      setUser("student");
    }else{
      setUser("Company");
    }
  }
  return (
    <div className="Signup-main">
      <form class="lform" action="#" method="post">

        <h1 id="lgn">Sign Up</h1>
        <br/>
      <input type="radio" name="user" id="student" value="student" onChange={(e)=>handleChange(e)}/><label for="student" >Student</label>
      
      <input type="radio" name="user" id="company" value="company" onChange={(e)=>handleChange(e)}/><label for="company">Comapny</label>
        {/* <hr id="h-r" /> */}
    
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Second Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Enter Your E-mail" required />

        <input id="pswrd2" type="password" placeholder="Creat Password" required />
        <input id="pswrd" type="password" placeholder="Re-Enter Password" required />
        <input type="submit" value="Sign Up" />
        {user=="student"?<h1>student</h1>:<h1>Comapny</h1>}

      </form>

      {/* <div class="signup-outerdiv">
        
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
        </Form.Text> *
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </div> */}
    </div>
  );
}

export default Signup;
