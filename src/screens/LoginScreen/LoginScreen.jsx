import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import bgImage from "../../../assets/bg_photo.png";

import {
  BackgroundView,
  Container,
  Title,
  InputWrapper,
  Input,
  PasswordInputWrapper,
  PasswordButton,
  PasswordButtonText,
  SignInButton,
  SignInButtonText,
  SignUpWrapper,
  SignUpText,
  SignUpButtonText,
  ErrorText,
} from "./LoginScreen.styled";

import { useReducer, useState } from "react";
import { useInputFormReducer } from "../../hooks/useInputFormReducer";
import { emailValidate, passwordValidate } from "../../utils/validators";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [inputsValue, dispatch] = useReducer(useInputFormReducer, {
    email: "",
    password: "",
  });

  const { email, password } = inputsValue;

  const handleSubmit = () => {
    if (!emailValidate(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!passwordValidate(password)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    console.log(inputsValue);

    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });

    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  return (
    <BackgroundView source={bgImage}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Title>Увійти</Title>

          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={32}>
            <InputWrapper>
              <View>
                <Input
                  name="email"
                  value={email}
                  onChangeText={(text) =>
                    dispatch({ type: "email", payload: text })
                  }
                  placeholder="Адреса електронної пошти"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
                {emailError && (
                  <ErrorText>Невірний формат електронної пошти</ErrorText>
                )}
              </View>

              <View>
                <PasswordInputWrapper>
                  <Input
                    name="password"
                    value={password}
                    onChangeText={(text) =>
                      dispatch({ type: "password", payload: text })
                    }
                    placeholder="Пароль"
                    textContentType="password"
                    secureTextEntry={passwordVisible}
                  />

                  <PasswordButton
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  >
                    <PasswordButtonText>Показати</PasswordButtonText>
                  </PasswordButton>
                </PasswordInputWrapper>
                {passwordError && (
                  <ErrorText>
                    Пароль має містити не менше 8 символів, малі, великі літери
                    та цифри
                  </ErrorText>
                )}
              </View>
            </InputWrapper>
          </KeyboardAvoidingView>

          <SignInButton onPress={handleSubmit} underlayColor="#cf5803">
            <SignInButtonText>Увійти</SignInButtonText>
          </SignInButton>

          <SignUpWrapper>
            <SignUpText>Немає аккаунту? </SignUpText>
            <Link to={{ screen: "Registration" }}>
              <SignUpButtonText>Зареєструватися</SignUpButtonText>
            </Link>
          </SignUpWrapper>
        </Container>
      </TouchableWithoutFeedback>
    </BackgroundView>
  );
};

export default LoginScreen;
