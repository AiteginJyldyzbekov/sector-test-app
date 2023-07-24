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
    //setData - for putting data into state
    setData: (state, action) => {
      if (action.payload.length > 0) {
        state.searchData = action.payload;
      } else if (action.payload.length <= 0) {
        state.searchData = null;
      }
    },
    //Sorting by ID
    sortById: (state, action) => {
      //condition on data sorting for search or normal
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
    //Sorting by title
    sortByTitle: (state, action) => {
      //condition on data sorting for search or normal
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
    //Sorting by body
    sortByBody: (state, action) => {
      //condition on data sorting for search or normal
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
  //ExtraReducers which works while request is sending
  extraReducers: (builder) => {
    //While loading
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = LoadingStatus.pending;
    });
    //After get succes request
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = LoadingStatus.succeeded;
      state.posts = action.payload;
    });
    //After get error
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = LoadingStatus.failed;
      state.error = action.error as string;
    });
  },
});

export const { sortById, sortByTitle, sortByBody, setData } = postSlice.actions;
export const postReducer = postSlice.reducer;
