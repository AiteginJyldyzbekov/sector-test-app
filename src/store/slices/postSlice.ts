import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "store/asyncReducers";
import { LoadingStatus } from "store/types";
import { InitialStateType } from "store/types";

const initialState: InitialStateType = {
  posts: [],
  error: null,
  isLoading: LoadingStatus.idle,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = LoadingStatus.pending;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = LoadingStatus.succeeded;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = LoadingStatus.failed;
      state.error = action.error as string;
    });
  }
});

export const postReducer = postSlice.reducer;
