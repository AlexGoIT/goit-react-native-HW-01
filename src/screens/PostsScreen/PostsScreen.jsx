import {
  BackgroundView,
  ProfileWrapper,
  ProfileImage,
  ProfileDetailsWrapper,
  ProfileName,
  ProfileEmail,
} from "./PostsScreen.styled";
import profileImage from "../../../assets/profile_image.png";

import posts from "../../constants/posts.json";
import { FlatList } from "react-native";
import Item from "../../components/Item";

const PostsScreen = () => {
  return (
    <BackgroundView>
      <ProfileWrapper>
        <ProfileImage source={profileImage} />
        <ProfileDetailsWrapper>
          <ProfileName>Natali Romanova</ProfileName>
          <ProfileEmail>email@example.com</ProfileEmail>
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
