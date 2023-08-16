import {
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import bgImage from "../../../assets/bg_photo.png";
import { loginScreenStyles } from "./LoginScreen.styled";

const LoginScreen = () => {
  return (
    <ImageBackground source={bgImage} style={loginScreenStyles.bgImage}>
      <View style={loginScreenStyles.container}>
        <Text style={loginScreenStyles.title}>Увійти</Text>
        <View style={loginScreenStyles.textInputWrapper}>
          <TextInput
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
            textContentType="emailAddress"
            style={loginScreenStyles.textInput}
          />
          <View style={loginScreenStyles.passwordInputWrapper}>
            <TextInput
              placeholder="Пароль"
              textContentType="password"
              secureTextEntry
              style={loginScreenStyles.textInput}
            />
            <TouchableOpacity style={loginScreenStyles.passwordButton}>
              <Text style={loginScreenStyles.passwordText}>Показати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={loginScreenStyles.button}
          underlayColor="#cf5803"
        >
          <Text style={loginScreenStyles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>

        <View style={loginScreenStyles.signInWrapper}>
          <Text style={loginScreenStyles.signInText}>Немає аккаунту? </Text>
          <TouchableOpacity>
            <Text style={loginScreenStyles.signInButtonText}>
              Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
