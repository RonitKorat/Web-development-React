import { useCallback, useEffect, useReducer, useState, createContext } from "react";

// Create context with default values
export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

// Reducer function for managing post list state
const postListReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.postId);
    case "ADD_INITIAL_POSTS":
      return action.payload.posts;
    case "ADD_POST":
      return [action.payload, ...state];
    default:
      return state;
  }
};

// Provider component to manage and provide post list state
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  // Function to add a post
  const addPost = useCallback((post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  }, []);

  // Function to add initial posts
  const addInitialPosts = useCallback((posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: posts,
    });
  }, []);

  // Function to delete a post
  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  }, []);

  // Fetch posts on mount
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, [addInitialPosts]);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
