import SignupBox from "../components/SignupBox";
import "./SignupPage.css";
function Signup() {
  return (
    <div className="container-fluid mainSignupContainer d-flex justify-content-center flex-column">
      <div className="row">
        <div className="col-sm-12 col-lg-12 text-center">
          <p className="display-1 signupText">
            <u>Signup</u>
          </p>
        </div>
        <div className="col-sm-12 col-lg-12 d-flex justify-content-center p-2">
          <SignupBox />
        </div>
      </div>
    </div>
  );
}

export default Signup;
