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
  reducers: {
    sortById: (state) => {
      state.posts.sort((a: { id: number }, b: { id: number }) => b.id - a.id);
    },
    sortByTitle: (state) => {
      state.posts.sort((a: { title: string }, b: { title: string }) =>
        a.title.localeCompare(b.title)
      );
    },
    sortByBody: (state) => {
      state.posts.sort((a: { body: string }, b: { body: string }) =>
        a.body.localeCompare(b.body)
      );
    },
  },
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
  },
});

export const { sortById, sortByTitle, sortByBody } = postSlice.actions;
export const postReducer = postSlice.reducer;
