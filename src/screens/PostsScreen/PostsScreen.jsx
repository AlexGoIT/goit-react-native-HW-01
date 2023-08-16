import { ImageBackground } from "react-native";
import LoginScreen from "../../components/LoginScreen/LoginScreen";
import RegistrationScreen from "../../components/RegistrationScreen";
import bgImage from "../../../assets/bg_photo.png";
import { styles } from "./PostsScreen.styled";

const PostsScreen = () => {
  return (
    <ImageBackground source={bgImage} style={styles.bgImage}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </ImageBackground>
  );
};

export default PostsScreen;
