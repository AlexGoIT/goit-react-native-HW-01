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
import { createPost } from "../../redux/posts/postsOperations";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch } from "react-redux";

const CreatePostScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [inputsValue, dispatchForm] = useReducer(useInputFormReducer, {
    photoName: "",
    locationName: "",
  });

  const { photoName, locationName } = inputsValue;

  const [disabled, setDisabled] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  // const [post, setPost] = useState(null);

  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [locationStatus, requestLocation] = Location.useForegroundPermissions();

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
      await requestCameraPermission();
      await requestLocation();
    })();
  }, []);

  const handleTakePhoto = async () => {
    if (!cameraRef) {
      return;
    }

    if (cameraPermission?.status !== "granted") {
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

    setIsLoading(true);
    const location = await Location.getCurrentPositionAsync();
    setIsLoading(false);

    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const post = {
      // imageURL: photo,
      imageURL: "https://picsum.photos/200",
      title: inputsValue.photoName,
      location: { ...coords, name: locationName },
      likes: 0,
      comments: [],
      // id: nanoid(),
    };

    if (!post) {
      Alert.alert("Не вдалося створити пост, повторіть спробу");
      return;
    }

    console.log("createPostScreen", post);

    dispatch(createPost(post));

    reset();
    navigation.navigate("Posts");
  };

  const reset = () => {
    dispatchForm({ type: "photoName", payload: "" });
    dispatchForm({ type: "locationName", payload: "" });

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
              dispatchForm({ type: "photoName", payload: text })
            }
            placeholder="Назва..."
          />
          <MapInputWrapper>
            <MapInput
              name="locationName"
              value={locationName}
              onChangeText={(text) =>
                dispatchForm({ type: "locationName", payload: text })
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
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={"#FF6C00"}
            style={{ marginTop: 20 }}
          />
        )}
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
