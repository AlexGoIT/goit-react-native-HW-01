import styles from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styles.View`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const PostImage = styles.Image`
  width: 100%;
  height: 240px;
  resize-mode: cover;
  border-radius: 8px;
`;

export const CommentList = styles(FlatList)`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const CommentInputWrapper = styles.View`
`;

export const CommentInput = styles.TextInput`
  height: 50px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 50px;
  border-radius: 25px;
  background-color: #F6F6F6;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
`;

export const CommentButton = styles.TouchableOpacity`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 34px;
  height: 34px;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  background-color: #FF6C00;
`;
