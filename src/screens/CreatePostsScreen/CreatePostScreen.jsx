import { useState } from "react";
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
} from "./CreatePostScreen.styled";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const CreatePostScreen = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <BackgroundView>
      <ImageWrapper>
        <CameraButton>
          <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
        </CameraButton>
      </ImageWrapper>
      <HelpText>Завантажте фото</HelpText>
      <InputWrapper>
        <Input placeholder="Назва..." />
        <MapInputWrapper>
          <MapInput placeholder="Місцевість..." />
          <MapInputIcon name="map-pin" size={24} color="#BDBDBD" />
        </MapInputWrapper>
      </InputWrapper>
      <PostButton
        disabled={disabled}
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
      <DeleteButton>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </DeleteButton>
    </BackgroundView>
  );
};

export default CreatePostScreen;
