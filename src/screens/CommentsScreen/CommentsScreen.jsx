import {
  CommentButton,
  CommentInput,
  CommentInputWrapper,
  CommentList,
  Container,
  PostImage,
} from "./CommentsScreen.styled";
import CommentListItem from "../../components/CommentListItem";
import { Feather } from "@expo/vector-icons";

import posts from "../../constants/posts.json";

const CommentsScreen = () => {
  const { comments } = posts[0];

  return (
    <Container>
      <PostImage source={{ uri: "https://picsum.photos/300" }} />
      <CommentList
        data={comments}
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
