import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "api/Api";

export const fetchPosts = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await getPosts();
  return res.data;
});
