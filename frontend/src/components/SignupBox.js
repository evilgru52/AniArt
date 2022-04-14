import "../pages/SignupPage.css";
function SignupBox() {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column signupBox"
      style={{
        minHeight: "40vh",
        border: "1px solid gray",
      }}
    >
      <input placeholder="Name" className="loginInput" />
      <input placeholder="Username" className="loginInput" />
      <input placeholder="Email" type="email" className="loginInput" />
      <input placeholder="Password" type="password" className="loginInput" />
      <button className="loginButton btn btn-outline-dark">
        Create new Account
      </button>
    </div>
  );
}

export default SignupBox;
