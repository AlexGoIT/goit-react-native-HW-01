import {
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { styles } from "./LoginScreen.styled";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <View style={styles.textInputWrapper}>
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
        Немає аккаунту? <Text style={styles.signIn}>Зареєструватися</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
