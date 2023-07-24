import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "store/asyncReducers";
import { LoadingStatus } from "store/types";
import { InitialStateType } from "store/types";

const initialState: InitialStateType = {
  posts: [],
  searchData: [],
  error: null,
  isLoading: LoadingStatus.idle,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setData: (state, action) => {
      if (action.payload.length > 0) {
        state.searchData = action.payload;
      } else if (action.payload.length <= 0) {
        state.searchData = null;
      }
    },
    sortById: (state, action) => {
      if (action.payload == "search" && state.searchData != null) {
        state.searchData.sort(
          (a: { id: number }, b: { id: number }) => b.id - a.id
        );
      } else {
        if (state.searchData != null) {
          state.posts?.sort(
            (a: { id: number }, b: { id: number }) => b.id - a.id
          );
        }
      }
    },
    sortByTitle: (state, action) => {
      if (action.payload == "search" && state.searchData != null) {
        state.searchData.sort((a: { title: string }, b: { title: string }) =>
          a.title.localeCompare(b.title)
        );
      } else {
        state.posts.sort((a: { title: string }, b: { title: string }) =>
          a.title.localeCompare(b.title)
        );
      }
    },
    sortByBody: (state, action) => {
      if (action.payload == "search" && state.searchData != null) {
        state.searchData.sort((a: { body: string }, b: { body: string }) =>
          a.body.localeCompare(b.body)
        );
      } else {
        state.posts.sort((a: { body: string }, b: { body: string }) =>
          a.body.localeCompare(b.body)
        );
      }
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

export const { sortById, sortByTitle, sortByBody, setData } = postSlice.actions;
export const postReducer = postSlice.reducer;
