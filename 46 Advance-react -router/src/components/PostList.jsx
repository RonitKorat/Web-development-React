import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";

const PostList = () => {
  // Access postList and fetching state from context
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {/* Show loader when fetching data */}
      {fetching && <Loader />}

      {/* Show welcome message when not fetching and postList is empty */}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      {/* Map through postList and render Post components */}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
