import { useState } from "react";
import { postDetails } from "../Others/Data";
import CommentBox from "./CommentBox";
import ImageCardPart from "./ImageCardPart";

function ImageCard() {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="postCardContainer">
      <div className="row" style={{ margin: "auto" }}>
        <ImageCardPart />
        {!showComments ? (
          <>
            <div className="col-sm-12 col-lg-12 text-center mt-3">
              <p
                className="loadCommentText"
                onClick={() => {
                  setShowComments(true);
                }}
              >
                Load Comments
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="col-sm-12 col-lg-12 text-center mt-3">
              <p
                className="loadCommentText"
                onClick={() => {
                  setShowComments(false);
                }}
              >
                Hide Comments
              </p>
            </div>
            {postDetails.map((value) => {
              return <CommentBox />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default ImageCard;
