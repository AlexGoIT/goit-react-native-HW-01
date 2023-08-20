import styles from "styled-components/native";

export const BackgroundView = styles.ImageBackground`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const ProfileWrapper = styles.View`
  flex-direction: row;
  align-items: center;`;

export const ProfileImage = styles.Image`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  resize-mode: cover;
`;

export const ProfileDetailsWrapper = styles.View`
  margin-left: 8px;
`;

export const ProfileName = styles.Text`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 700;
  color: #212121;
`;

export const ProfileEmail = styles.Text`
  font-family: Roboto;
  font-size: 11px;
  font-weight: 400;
  color: rgba(33, 33, 33, 0.80);
`;
