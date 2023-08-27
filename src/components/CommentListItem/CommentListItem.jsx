import {
  CommentAvatar,
  CommentContainer,
  CommentDate,
  CommentText,
  CommentWrapper,
} from "./CommentListItem.styled";

const CommentListItem = ({ item }) => {
  const { authorAvatarURL, comment } = item;

  return (
    <CommentContainer>
      <CommentAvatar src={authorAvatarURL} alt="author avatar" />
      <CommentWrapper>
        <CommentText>{comment}</CommentText>
        <CommentDate>09 червня, 2020 | 08:40</CommentDate>
      </CommentWrapper>
    </CommentContainer>
  );
};

export default CommentListItem;
