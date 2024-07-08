import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};
const DEFAULT_POSTLIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "hello i am going to mumbai",
    reaction: 3,
    userID: "uer-",
    tags: ["bhid", "vadapav", "peace"],
  },
  {
    id: "2",
    title: "Paas ho gaye",
    body: "after 4 year i am going to anaounce that i am paas",
    reaction: 15,
    userID: "uer-9",
    tags: ["moj", "react"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
