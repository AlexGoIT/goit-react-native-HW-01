import {
  BackgroundView,
  ProfileWrapper,
  ProfileImage,
  ProfileDetailsWrapper,
  ProfileName,
  ProfileEmail,
} from "./PostsScreen.styled";

// import posts from "../../constants/posts.json";
import { FlatList } from "react-native";
import Item from "../../components/Item";
import Loader from "../../components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";

import { useEffect } from "react";
import {
  selectIsChanged,
  selectIsLoading,
  selectPosts,
} from "../../redux/posts/postsSelectors";
import { fetchPosts } from "../../redux/posts/postsOperations";

const PostsScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { displayName, email, photoURL } = user;

  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const isChanged = useSelector(selectIsChanged);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, isChanged]);

  return (
    <>
      <BackgroundView>
        <ProfileWrapper>
          <ProfileImage source={{ uri: photoURL }} />
          <ProfileDetailsWrapper>
            <ProfileName>{displayName}</ProfileName>
            <ProfileEmail>{email}</ProfileEmail>
          </ProfileDetailsWrapper>
        </ProfileWrapper>

        <FlatList
          data={posts}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          style={{
            marginTop: 32,
          }}
        />
      </BackgroundView>
      {isLoading && <Loader />}
    </>
  );
};

export default PostsScreen;
