import ImageCard from "../components/ImageCard";
import Navbar from "../components/Navbar";
import { postDetails } from "../Others/Data";
function PostsDisplay() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center"
      style={{
        padding: "0px",
        background: "url('https://wallpapercave.com/wp/wp5811210.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "left",
      }}
    >
      {postDetails.map((value) => {
        return <ImageCard />;
      })}
    </div>
  );
}

export default PostsDisplay;
