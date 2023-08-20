import styles from "styled-components/native";

export const AvatarWrapper = styles.View`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #F6F6F6;
  position: absolute;
  top: -60px;
`;

export const AvatarImage = styles.Image``;

export const AddAvatarButtonWrapper = styles.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  right: -12px;
`;

export const AddAvatarButtonImage = styles.Image`
  width: 25px;
  height: 25px;
`;
