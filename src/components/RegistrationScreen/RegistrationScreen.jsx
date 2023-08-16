import { Image, Text, TextInput, TouchableHighlight, View } from "react-native";
import addImage from "../../../assets/add.png";
import { styles } from "./RegistrationScreen.styled";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={addImage} style={styles.addAvatarButton} />
      </View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.textInputWrapper}>
        <TextInput placeholder="Логін" style={styles.textInput} />
        <TextInput
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
          textContentType="emailAddress"
          style={styles.textInput}
        />
        <View style={styles.passwordInputWrapper}>
          <TextInput
            placeholder="Пароль"
            textContentType="password"
            secureTextEntry
            style={styles.textInput}
          />
          <Text style={styles.passwordText}>Показати</Text>
        </View>
      </View>
      <TouchableHighlight
        onPress={() => {}}
        style={styles.button}
        underlayColor="#cf5803"
      >
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableHighlight>
      <Text style={styles.signInText}>
        Вже є акаунт? <Text style={styles.signIn}>Увійти</Text>
      </Text>
    </View>
  );
};

export default RegistrationScreen;
