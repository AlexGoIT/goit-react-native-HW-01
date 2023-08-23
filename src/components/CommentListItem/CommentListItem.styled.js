import styles from "styled-components/native";

export const CommentContainer = styles.View`
  margin-bottom: 24px;
  flex: 1;  
  flex-direction: row;
`;

export const CommentAvatar = styles.Image`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background-color: #F6F6F6;
`;

export const CommentWrapper = styles.View`
  width: 80%;
  margin-left: 16px;
  padding: 16px;
  border-radius: 0px 6px 6px 6px;
  background: rgba(0, 0, 0, 0.03);
`;

export const CommentText = styles.Text`
  font-family: Roboto;
  font-size: 13px;
  color: #212121;
  line-height: 18px;
`;

export const CommentDate = styles.Text`
  margin-top: 8px;
  font-family: Roboto;
  font-size: 10px;
  color: #BDBDBD;
  text-align: right;
`;
