import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create async action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://64465d350431e885f00ff118.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//read async action
export const showUser = createAsyncThunk(
  "showUser",
  async ({ rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://64465d350431e885f00ff118.mockapi.io/crud"
      );
      const result = response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  // object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = state.action.message;
    },
  },
});

export default userDetail.reducer;
