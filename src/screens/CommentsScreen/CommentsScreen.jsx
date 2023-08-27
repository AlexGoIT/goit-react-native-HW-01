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

import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsChanged,
  selectIsLoading,
  selectPost,
} from "../../redux/posts/postsSelectors";
import { useEffect, useState } from "react";
import { selectUser } from "../../redux/auth/authSelectors";
import { nanoid } from "nanoid";
import { addComment, fetchPost } from "../../redux/posts/postsOperations";

import Loader from "../../components/Loader";

const CommentsScreen = () => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const user = useSelector(selectUser);
  const post = useSelector(selectPost);
  const isLoading = useSelector(selectIsLoading);
  const isChanged = useSelector(selectIsChanged);

  const isNotCommented = post.comments?.length === 0;

  const {
    params: { id },
  } = useRoute();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, isChanged]);

  const handlerCommentButton = () => {
    if (!comment) {
      return;
    }

    const newComment = {
      id: nanoid(),
      comment,
      authorName: user.displayName,
      authorAvatarURL: user.photoURL,
    };

    dispatch(addComment({ id, newComment }));

    setComment("");
  };

  return (
    <>
      <Container>
        <PostImage src={post.imageURL} />
        {isNotCommented && (
          <NotCommentedText>Твій коментар буде першим...</NotCommentedText>
        )}
        <CommentList
          data={post.comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CommentListItem item={item} />}
        />
        <CommentInputWrapper>
          <CommentInput
            name="comment"
            value={comment}
            onChangeText={setComment}
            placeholder="Коментувати..."
          />
          <CommentButton onPress={handlerCommentButton}>
            <Feather name="arrow-up" size={24} color="#fff" />
          </CommentButton>
        </CommentInputWrapper>
      </Container>
      {isLoading && <Loader />}
    </>
  );
};

export default CommentsScreen;
