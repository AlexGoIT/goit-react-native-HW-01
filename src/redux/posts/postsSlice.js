import { createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  createPost,
  fetchPost,
  fetchPosts,
  incrementLike,
  updatePost,
} from "./postsOperations";

const initialState = {
  items: [],
  item: {},
  isLoading: false,
  error: null,
  isChanged: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    // fetch posts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isChanged = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // fetch post
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isChanged = false;
        state.item = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // update post
    builder
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isChanged = true;
        state.items = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // add comment
    builder
      .addCase(addComment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isChanged = true;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // create post
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isChanged = true;
        state.items.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // increment like
    builder
      .addCase(incrementLike.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(incrementLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isChanged = true;
      })
      .addCase(incrementLike.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default postsSlice.reducer;
