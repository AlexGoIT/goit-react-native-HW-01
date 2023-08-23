import { useEffect, useReducer, useState } from "react";
import {
  BackgroundView,
  ImageWrapper,
  InputWrapper,
  Input,
  HelpText,
  PostButton,
  PostButtonText,
  MapInputWrapper,
  MapInputIcon,
  MapInput,
  CameraButton,
  DeleteButton,
  PhotoView,
  CameraView,
} from "./CreatePostScreen.styled";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { useInputFormReducer } from "../../hooks/useInputFormReducer";
import { Alert, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const CreatePostScreen = () => {
  const navigation = useNavigation();

  const [inputsValue, dispatch] = useReducer(useInputFormReducer, {
    photoName: "",
    photoLocation: "",
  });

  const { photoName, photoLocation } = inputsValue;

  const [disabled, setDisabled] = useState(true);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      requestPermission();
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  const handleTakePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);

      setPhoto(uri);
      setDisabled(false);
    }
  };

  const handleSendPost = () => {
    if (!photoName || !photoLocation) {
      Alert.alert("Заповніть всі поля");
      return;
    }

    console.log(inputsValue, photo);

    reset();
    navigation.navigate("Posts");
  };

  const reset = () => {
    dispatch({ type: "photoName", payload: "" });
    dispatch({ type: "photoLocation", payload: "" });

    setPhoto(null);
    setDisabled(true);
  };

  return (
    <BackgroundView>
      <ImageWrapper>
        {permission?.status !== "granted" ? (
          <>
            <Text
              style={{ color: "red", marginBottom: 16, textAlign: "center" }}
            >
              Потрібно дозволити доступ до камери
            </Text>
            <TouchableOpacity onPress={() => requestPermission()}>
              <Feather name="refresh-cw" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </>
        ) : photo ? (
          <PhotoView src={photo} />
        ) : (
          <Camera
            type={type}
            ref={setCameraRef}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CameraView>
              <CameraButton onPress={handleTakePhoto}>
                <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
              </CameraButton>
            </CameraView>
          </Camera>
        )}
      </ImageWrapper>
      <HelpText>Завантажте фото</HelpText>
      <InputWrapper>
        <Input
          name="photoName"
          value={photoName}
          onChangeText={(text) =>
            dispatch({ type: "photoName", payload: text })
          }
          placeholder="Назва..."
        />
        <MapInputWrapper>
          <MapInput
            name="photoLocation"
            value={photoLocation}
            onChangeText={(text) =>
              dispatch({ type: "photoLocation", payload: text })
            }
            placeholder="Місцевість..."
          />
          <MapInputIcon name="map-pin" size={24} color="#BDBDBD" />
        </MapInputWrapper>
      </InputWrapper>
      <PostButton
        disabled={disabled}
        onPress={handleSendPost}
        style={
          disabled
            ? { backgroundColor: "#F6F6F6" }
            : { backgroundColor: "#FF6C00" }
        }
      >
        <PostButtonText
          style={disabled ? { color: "#BDBDBD" } : { color: "#fff" }}
        >
          Опублікувати
        </PostButtonText>
      </PostButton>
      <DeleteButton disabled={disabled} onPress={() => reset()}>
        <Feather
          name="trash-2"
          size={24}
          color={disabled ? "#BDBDBD" : "#FF6C00"}
        />
      </DeleteButton>
    </BackgroundView>
  );
};

export default CreatePostScreen;
