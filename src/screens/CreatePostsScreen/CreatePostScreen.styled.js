import styles from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const BackgroundView = styles.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const ImageWrapper = styles.View`
  width: 100%;
  height: 240px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #F6F6F6;

  overflow: hidden;
`;

export const HelpText = styles.Text`
  width: 100%;
  margin-top: 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  color: #BDBDBD;
`;

export const InputWrapper = styles.View`
  width: 100%;
  margin-top: 32px;
  gap: 16px;
`;

export const Input = styles.TextInput`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #E8E8E8;
`;

export const MapInput = styles.TextInput`
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #E8E8E8;
  padding-left: 28px;
`;

export const MapInputWrapper = styles.View``;

export const MapInputIcon = styles(Feather)`
  position: absolute;
  left: 0;
  top: 13px;
`;

export const PostButton = styles.TouchableOpacity`
  width: 100%;
  margin-top: 32px;
  padding: 16px 32px;
  border-radius: 100px;
`;

export const PostButtonText = styles.Text`
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
`;

export const DeleteButton = styles.TouchableOpacity`
  position: absolute;
  bottom: 34px;
  width: 70px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f6f6f6;
`;

export const CameraButton = styles.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #fff;
  opacity: 0.5;
`;

export const CameraView = styles.View`
  flex: 1;
  justify-content: center;  
  background-color: transparent;
`;

export const PhotoView = styles.Image`
  width: 100%;
  height: 100%;
`;
