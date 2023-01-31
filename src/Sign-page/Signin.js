import "./Signin.css";
import Pic from "../imgs/blacklogo.png";

function Signin() {
  return (
    <>
      <div className="Signin-Main-Div">
        <div className="Signin-Pic-Div">
          <br />
          <br />
          <img alt="LOGO" src={Pic} width={"30%"} />
          <br />
          <br />
          <br />
          <p style={{ color: "#FFFFFF" }}>
            A website owned by IT department in University of Jordan aims to
            improve students skills and help them make a source of income
          </p>
        </div>
        <div className="Signin-Form">
          <div class="logincontainer">
            <div class="screen">
              <div
                class="screen__content"
                style={{ textAlign: "center", paddingTop: "10px" }}
              >
                <h1 style={{ WebkitTextStroke: "0.5px #2915bd" }}>Login</h1>
                <form class="login" style={{ textAlign: "center" }}>
                  <div class="login__field">
                    <i class="login__icon fas fa-user"></i>
                    <input
                      type="text"
                      class="login__input"
                      placeholder="Email"
                    />
                  </div>
                  <div class="login__field">
                    <i class="login__icon fas fa-lock"></i>
                    <input
                      type="password"
                      class="login__input"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    class="button login__submit"
                    style={{ textAlign: "center" }}
                  >
                    <span class="button__text" style={{ textAlign: "center" }}>
                      Log In Now
                    </span>
                    <i class="button__icon fas fa-chevron-right"></i>
                  </button>
                </form>
                <br></br>
                <h6 style={{ color: "#ffffff"}}>Dont have Account yet?! </h6>
                <a style={{ color: "#ffffff", fontWeight: "bold" }} href={"/"}>
                  Sign up now
                </a>
              </div>
              <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
