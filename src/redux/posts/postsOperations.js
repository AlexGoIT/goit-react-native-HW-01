import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
  increment,
} from "firebase/firestore";
import { Alert } from "react-native";

// Fetch all posts
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));

      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      Alert.alert("Помилка", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch post
export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (id, thunkAPI) => {
    try {
      const docSnap = await getDoc(doc(db, "posts", id));

      return docSnap.data();
    } catch (error) {
      Alert.alert("Помилка", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update post
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ id, field, data }, thunkAPI) => {
    console.log("updatePost =>", id, field, data);

    const docRef = doc(db, "posts", id);

    try {
      await updateDoc(docRef, { [field]: data });
    } catch (error) {
      Alert.alert("Помилка", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Add comment
export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ id, newComment }, thunkAPI) => {
    const docRef = doc(db, "posts", id);

    try {
      await updateDoc(docRef, {
        comments: arrayUnion(newComment),
      });

      return newComment;
    } catch (error) {
      Alert.alert("Помилка", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create post
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), post);

      console.log("Document written with ID: ", docRef.id, docRef);

      return { id: docRef.id, ...post };
    } catch (error) {
      Alert.alert("Помилка", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Increment like
export const incrementLike = createAsyncThunk(
  "posts/incrementLike",
  async (id, thunkAPI) => {
    const docRef = doc(db, "posts", id);

    try {
      await updateDoc(docRef, {
        likes: increment(1),
      });
    } catch (error) {
      Alert.alert("Помилка", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
