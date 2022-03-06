import React from "react";

function ImageCardPart() {
  return (
    <>
      <div
        className="col-sm-12 col-lg-12 imageDisplay"
        style={{
          backgroundImage: "url('https://wallpapercave.com/wp/wp5079344.jpg')",
        }}
      >
        <div
          className="d-flex justify-content-between"
          style={{
            width: "100%",
            margin: "auto",
            height: "90%",
          }}
        >
          <img
            className="img-fluid rounded-circle me-auto"
            src="https://photos.angel.co/users/12302335-medium_jpg?1645971112"
            style={{ width: "50px", height: "50px" }}
          />
          <p className="p-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
            <>
              <i className="fas fa-heart"></i>{" "}
            </>
            2000 Likes
          </p>
        </div>
      </div>
      <div className="col-sm-12 col-lg-12 mt-5">
        <div className="row">
          <div
            className="col-sm-12 text-center"
            style={{ fontFamily: "Pacifico, cursive", fontWeight: "bold" }}
          >
            <h1>A Hand Made Drawing</h1>
          </div>
          <div className="col-sm-12 text-center">
            <h4>Drawing By</h4>
          </div>
          <div
            className="col-sm-12 col-lg-6 text-center"
            style={{ marginTop: "10px" }}
          >
            <i className="far fa-heart" style={{ fontSize: "3em" }}></i>
          </div>
          <div className="col-sm-12 col-lg-6 text-center">
            <div className="addCommentDiv">
              <input
                className="addComment"
                placeholder="Comment..."
                style={{ fontFamily: "Fredoka One, cursive" }}
              />
              <i className="far fa-comment"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCardPart;
