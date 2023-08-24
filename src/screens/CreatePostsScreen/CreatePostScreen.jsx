import "react-native-get-random-values";
import { nanoid } from "nanoid";
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
import { Alert } from "react-native";

import * as Location from "expo-location";
import Loader from "../../components/Loader";

const CreatePostScreen = () => {
  const navigation = useNavigation();

  const [inputsValue, dispatch] = useReducer(useInputFormReducer, {
    photoName: "",
    locationName: "",
  });

  const { photoName, locationName } = inputsValue;

  const [disabled, setDisabled] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [loader, setLoader] = useState(false);
  const [post, setPost] = useState(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [locationStatus, requestLocation] = Location.useForegroundPermissions();

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
      await requestPermission();
      await requestLocation();
    })();
  }, []);

  const handleTakePhoto = async () => {
    if (!cameraRef) {
      return;
    }

    if (permission?.status !== "granted") {
      await requestPermission();
    }

    const { uri } = await cameraRef.takePictureAsync();
    await MediaLibrary.createAssetAsync(uri);

    setPhoto(uri);
    setDisabled(false);
  };

  // Обробка натискання на кнопку "Опублікувати"
  const handleSendPost = async () => {
    if (!photoName || !locationName) {
      Alert.alert("Заповніть всі поля");
      return;
    }

    if (locationStatus.status !== "granted") {
      Alert.alert("Потрібно дозволити доступ до визначення місцезнаходження");
      return;
    }

    setLoader(true);
    const location = await Location.getCurrentPositionAsync();
    setLoader(false);

    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setPost({
      image: photo,
      title: inputsValue.photoName,
      location: { ...coords, name: locationName },
      likes: 0,
      comments: [],
      id: nanoid(),
    });

    if (!post) {
      Alert.alert("Не вдалося створити пост, повторіть спробу");
      return;
    }

    console.log(post);

    reset();
    navigation.navigate("Posts");
  };

  const reset = () => {
    dispatch({ type: "photoName", payload: "" });
    dispatch({ type: "locationName", payload: "" });

    setPhoto(null);
    setDisabled(true);
  };

  return (
    <>
      <BackgroundView>
        <ImageWrapper>
          {photo ? (
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
              name="locationName"
              value={locationName}
              onChangeText={(text) =>
                dispatch({ type: "locationName", payload: text })
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
        {loader && <Loader />}
        <DeleteButton disabled={disabled} onPress={() => reset()}>
          <Feather
            name="trash-2"
            size={24}
            color={disabled ? "#BDBDBD" : "#FF6C00"}
          />
        </DeleteButton>
      </BackgroundView>
    </>
  );
};

export default CreatePostScreen;
