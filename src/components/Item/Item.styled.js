import styles from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const ItemWrapper = styles.View`
  padding-bottom: 34px;
  gap: 8px;
`;

export const ItemTitle = styles.Text`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: #212121;
`;

export const ItemDescriptionWrapper = styles.View`
  flex-direction: row;
  align-items: center;
`;

export const CommentIcon = styles(Feather)`
  transform: rotateY(180deg);
`;

export const CommentCounter = styles.Text`
  margin-left: 6px;
  font-family: Roboto;
  font-size: 16px;
`;

export const LikeIcon = styles(Feather)`
  margin-left: 24px;
`;

export const LikesCounter = styles.Text`
margin-left: 6px;
  font-family: Roboto;
  font-size: 16px;
`;

export const MapPinIcon = styles(Feather)`
  margin-left: auto;
`;

export const LocationText = styles.Text`
  margin-left: 4px;
  font-family: Roboto;
  font-size: 16px;
  color: #212121;
  text-decoration: underline;
`;
