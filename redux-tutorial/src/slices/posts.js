import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasError: false,
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      (state.posts = payload),
        (state.loading = false),
        (state.hasError = false);
    },
    getPostsFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
} = postsSlice.actions;

export const postsSelector = (state) => state.posts;

export default postsSlice.reducer;

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(getPostsSuccess(data));
    } catch (e) {
      dispatch(getPostsFailure());
    }
  };
}
