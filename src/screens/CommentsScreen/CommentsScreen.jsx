import {
  CommentButton,
  CommentInput,
  CommentInputWrapper,
  CommentList,
  Container,
  NotCommentedText,
  PostImage,
} from "./CommentsScreen.styled";
import CommentListItem from "../../components/CommentListItem";
import { Feather } from "@expo/vector-icons";

import posts from "../../constants/posts.json";
import { useRoute } from "@react-navigation/native";

const CommentsScreen = () => {
  const {
    params: { id },
  } = useRoute();

  const post = posts.find((post) => post.id === id);
  const isNotCommented = post.comments.length === 0;

  return (
    <Container>
      <PostImage src={post.image} />
      {isNotCommented && (
        <NotCommentedText>Твій коментар буде першим...</NotCommentedText>
      )}
      <CommentList
        data={post.comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CommentListItem item={item} />}
      />
      <CommentInputWrapper>
        <CommentInput placeholder="Коментувати..." />
        <CommentButton>
          <Feather name="arrow-up" size={24} color="#fff" />
        </CommentButton>
      </CommentInputWrapper>
    </Container>
  );
};

export default CommentsScreen;
