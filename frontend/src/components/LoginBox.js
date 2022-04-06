import "../pages/LoginPage.css";
function LoginBox() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column loginBox"
        style={{
          minHeight: "40vh",
          border: "2px solid black",
        }}
      >
        <input placeholder="Username" className="loginInput" />
        <input placeholder="Password" type="password" className="loginInput" />
        <button className="loginButton btn btn-outline-dark">Login</button>
        <a className="loadCommentText">Forgotten password?</a>
        <button className="loginButton btn btn-outline-dark">
          Create new Account
        </button>
      </div>
    </>
  );
}

export default LoginBox;
