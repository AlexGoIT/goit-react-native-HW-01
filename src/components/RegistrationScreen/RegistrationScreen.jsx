import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import bgImage from "../../../assets/bg_photo.png";
import addImage from "../../../assets/add.png";
import { registrationScreenStyles } from "./RegistrationScreen.styled";

const RegistrationScreen = () => {
  return (
    <ImageBackground source={bgImage} style={registrationScreenStyles.bgImage}>
      <View style={registrationScreenStyles.container}>
        <View style={registrationScreenStyles.avatarWrapper}>
          <TouchableOpacity
            style={registrationScreenStyles.addAvatarButtonWrapper}
          >
            <Image
              source={addImage}
              style={registrationScreenStyles.addAvatarButton}
            />
          </TouchableOpacity>
        </View>
        <Text style={registrationScreenStyles.title}>Реєстрація</Text>
        <View style={registrationScreenStyles.textInputWrapper}>
          <TextInput
            placeholder="Логін"
            style={registrationScreenStyles.textInput}
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
            textContentType="emailAddress"
            style={registrationScreenStyles.textInput}
          />
          <View style={registrationScreenStyles.passwordInputWrapper}>
            <TextInput
              placeholder="Пароль"
              textContentType="password"
              secureTextEntry
              style={registrationScreenStyles.textInput}
            />
            <TouchableOpacity style={registrationScreenStyles.passwordButton}>
              <Text style={registrationScreenStyles.passwordText}>
                Показати
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={registrationScreenStyles.button}
          underlayColor="#cf5803"
        >
          <Text style={registrationScreenStyles.buttonText}>
            Зареєструватися
          </Text>
        </TouchableOpacity>

        <View style={registrationScreenStyles.signUpWrapper}>
          <Text style={registrationScreenStyles.signUpText}>
            Вже є акаунт?{" "}
          </Text>
          <TouchableOpacity>
            <Text style={registrationScreenStyles.signInButtonText}>
              Увійти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
