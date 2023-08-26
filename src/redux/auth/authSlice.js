import { createSlice } from "@reduxjs/toolkit";
import {
  authStateChanged,
  loginDB,
  logoutDB,
  registerDB,
} from "./authOperations";

const initialState = {
  user: {
    uid: null,
    displayName: null,
    email: null,
    photoURL: null,
  },
  isAuthorized: false,
  isRefreshed: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerDB.pending, (state) => {
        state.isRefreshed = true;
        state.error = null;
      })
      .addCase(registerDB.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.error = null;
        state.isAuthorized = true;
        state.user = action.payload;
      })
      .addCase(registerDB.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(loginDB.pending, (state) => {
        state.isRefreshed = true;
        state.error = null;
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.error = null;
        state.isAuthorized = true;
        state.user = action.payload;
      })
      .addCase(loginDB.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(logoutDB.pending, (state) => {
        state.isRefreshed = true;
        state.error = null;
      })
      .addCase(logoutDB.fulfilled, (state) => {
        state.isRefreshed = false;
        state.error = null;
        state.isAuthorized = false;
        state.user = initialState.user;
      })
      .addCase(logoutDB.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });

    builder
      .addCase(authStateChanged.pending, (state) => {
        state.isRefreshed = true;
        state.error = null;
      })
      .addCase(authStateChanged.fulfilled, (state, action) => {
        state.isRefreshed = false;
        state.error = null;
        state.isAuthorized = true;
        state.user = action.payload;
      })
      .addCase(authStateChanged.rejected, (state, action) => {
        state.isRefreshed = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
