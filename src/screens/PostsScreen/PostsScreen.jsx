import {
  BackgroundView,
  ProfileWrapper,
  ProfileImage,
  ProfileDetailsWrapper,
  ProfileName,
  ProfileEmail,
} from "./PostsScreen.styled";

import posts from "../../constants/posts.json";
import { FlatList } from "react-native";
import Item from "../../components/Item";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";

const PostsScreen = () => {
  const user = useSelector(selectUser);

  const { displayName, email, photoURL } = user;

  return (
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
  );
};

export default PostsScreen;
