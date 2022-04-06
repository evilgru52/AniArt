import LoginBox from "../components/LoginBox";
import "./LoginPage.css";
function Login() {
  return (
    <div
      className="container-fluid loginBoxParent"
      style={{
        minHeight: "100vh",
        margin: "0px",
      }}
    >
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-4 d-flex justify-content-center align-items-center loginTextBoxOne">
          <h1 className="display-2 loginText">Login</h1>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-8 d-flex justify-content-center align-items-center loginTextBoxTwo">
          <LoginBox />
        </div>
      </div>
    </div>
  );
}

export default Login;
