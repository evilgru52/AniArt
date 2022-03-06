function CommentBox() {
  return (
    <div className="col-sm-12 col-lg-12">
      <div className="d-flex flex-wrap commentBox">
        <img
          className="rounded-circle img-fluid"
          style={{ width: "25px", height: "25px" }}
          src="https://photos.angel.co/users/12302335-medium_jpg?1645971112"
        />
        <h5 style={{ fontWeight: "bold", margin: "2px", marginLeft: "0.5em" }}>
          Comment By
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default CommentBox;
