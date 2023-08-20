import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import bgImage from "../../../assets/bg_photo.png";

import {
  AddAvatarButtonImage,
  AddAvatarButtonWrapper,
  AvatarWrapper,
  BackgroundView,
  Container,
  Input,
  InputWrapper,
  PasswordButton,
  PasswordButtonText,
  PasswordInputWrapper,
  SignInButtonText,
  SignInText,
  SignInWrapper,
  SignUpButton,
  SignUpButtonText,
  Title,
  ErrorText,
  AvatarImage,
} from "./RegistrationScreen.styled";

import { useReducer, useState } from "react";
import { useInputFormReducer } from "../../hooks/useInputFormReducer";
import {
  loginValidate,
  emailValidate,
  passwordValidate,
} from "../../utils/validators";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [loginError, setLoginError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [inputsValue, dispatch] = useReducer(useInputFormReducer, {
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = inputsValue;

  const handleSubmit = () => {
    if (!loginValidate(name)) {
      setLoginError(true);
      return;
    } else {
      setLoginError(false);
    }

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

    dispatch({ type: "name", payload: "" });
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
          <AvatarWrapper>
            <AvatarImage source={null} />
            <AddAvatarButtonWrapper style={{ borderColor: "#FF6C00" }}>
              <Feather
                name="plus"
                size={25}
                style={{ transform: [{ rotate: "0deg" }], color: "#FF6C00" }}
              />
            </AddAvatarButtonWrapper>
          </AvatarWrapper>

          <Title>Реєстрація</Title>

          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={32}>
            <InputWrapper>
              <View>
                <Input
                  name="name"
                  value={name}
                  onChangeText={(text) => {
                    dispatch({ type: "name", payload: text });
                  }}
                  placeholder="Логін"
                  keyboardType="default"
                  textContentType="username"
                />
                {loginError && <ErrorText>Невірний формат логіна</ErrorText>}
              </View>

              <View>
                <Input
                  name="email"
                  value={email}
                  onChangeText={(text) => {
                    dispatch({ type: "email", payload: text });
                  }}
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
                    onChangeText={(text) => {
                      dispatch({ type: "password", payload: text });
                    }}
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

          <SignUpButton onPress={handleSubmit} underlayColor="#cf5803">
            <SignUpButtonText>Зареєструватися</SignUpButtonText>
          </SignUpButton>

          <SignInWrapper>
            <SignInText>Вже є акаунт? </SignInText>
            <Link to={{ screen: "Login" }}>
              <SignInButtonText>Увійти</SignInButtonText>
            </Link>
          </SignInWrapper>
        </Container>
      </TouchableWithoutFeedback>
    </BackgroundView>
  );
};

export default RegistrationScreen;
