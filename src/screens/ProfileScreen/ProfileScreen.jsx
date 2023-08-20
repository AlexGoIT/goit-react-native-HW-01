import {
  AddAvatarButtonWrapper,
  AvatarImage,
  AvatarWrapper,
  BackgroundView,
  Container,
  List,
  LogoutButton,
  UserName,
} from "./ProfileScreen.styled";
import Item from "../../components/Item";
import posts from "../../constants/posts.json";

import { Feather } from "@expo/vector-icons";
import profileImage from "../../../assets/profile_image.png";
import bgImage from "../../../assets/bg_photo.png";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <BackgroundView source={bgImage}>
      <Container>
        <AvatarWrapper>
          <AvatarImage source={profileImage} />
          <AddAvatarButtonWrapper style={{ borderColor: "#BDBDBD" }}>
            <Feather
              name="plus"
              size={25}
              style={{ transform: [{ rotate: "45deg" }], color: "#BDBDBD" }}
            />
          </AddAvatarButtonWrapper>
        </AvatarWrapper>
        <LogoutButton onPress={handleLogout}>
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </LogoutButton>

        <UserName>Natali Romanova</UserName>
        <List
          data={posts}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </BackgroundView>
  );
};

export default ProfileScreen;
