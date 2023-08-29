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

import { useEffect, useReducer, useState } from "react";
import { useInputFormReducer } from "../../hooks/useInputFormReducer";
import { emailValidate, passwordValidate } from "../../utils/validators";

import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsAuthorized,
} from "../../redux/auth/authSelectors";
import { authStateChanged, loginDB } from "../../redux/auth/authOperations";
import { Alert } from "react-native";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [inputsValue, dispatchForm] = useReducer(useInputFormReducer, {
    email: "",
    password: "",
  });

  const { email, password } = inputsValue;

  const error = useSelector(selectError);
  const isAuthorized = useSelector(selectIsAuthorized);

  useEffect(() => {
    dispatch(authStateChanged());

    if (isAuthorized) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, []);

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

    dispatch(
      loginDB({
        email,
        password,
      })
    );

    if (error) {
      Alert.alert("Помилка", error);
      return;
    }

    dispatchForm({ type: "email", payload: "" });
    dispatchForm({ type: "password", payload: "" });

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
                    dispatchForm({ type: "email", payload: text })
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
                      dispatchForm({ type: "password", payload: text })
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
