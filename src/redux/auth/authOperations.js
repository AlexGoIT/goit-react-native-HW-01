import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";

export const registerDB = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      await updateUserProfile({
        displayName: credentials.name,
        photoURL: credentials.photoURL,
      });

      const { uid, email, displayName, photoURL } = auth.currentUser;

      return { uid, email, displayName, photoURL };
    } catch (error) {
      Alert.alert("Помилка", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginDB = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const { uid, email, displayName, photoURL } = auth.currentUser;

      return { uid, email, displayName, photoURL };
    } catch (error) {
      Alert.alert("Помилка", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutDB = createAsyncThunk("auth/logoutDB", async () => {
  try {
    await auth.signOut();
  } catch (error) {
    Alert.alert("Помилка", error);
  }
});

const updateUserProfile = async (update) => {
  const user = auth.currentUser;

  if (!user) return;

  try {
    await updateProfile(user, update);
  } catch (error) {
    Alert.alert("Помилка", error);
  }
};

export const authStateChanged = createAsyncThunk(
  "auth/authStateChanged",
  async (
    onChange = () => {
      if (user) {
        return {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
      } else {
        return {
          uid: null,
          email: null,
          displayName: null,
          photoURL: null,
        };
      }
    }
  ) => {
    onAuthStateChanged((user) => {
      onChange(user);
    });
  }
);
