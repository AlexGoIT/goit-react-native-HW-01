import { Alert } from "react-native";
import { storage } from "./config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import RNFS from "react-native-fs";

export const uploadFile = async (file) => {
  const storageRef = ref(storage, `images/${file.filename}`);

  try {
    const fileData = await RNFS.readFile(file.uri, "base64");

    await uploadBytes(storageRef, fileData);

    const url = await getDownloadURL(storageRef);

    return url;
  } catch (error) {
    Alert.alert("uploadFile: error", error.massage);
    return null;
  }
};
