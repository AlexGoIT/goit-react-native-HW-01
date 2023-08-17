import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
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
} from "./LoginScreen.styled";

import { useInputFormReducer } from "../../hooks/useInputFormReducer";
import { useReducer, useState } from "react";

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [inputsValue, dispatch] = useReducer(useInputFormReducer, {
    email: "",
    password: "",
  });

  const { email, password } = inputsValue;

  const handleSubmit = () => {
    console.log(inputsValue);

    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
  };
  return (
    <BackgroundView source={bgImage}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Title>Увійти</Title>

          <InputWrapper>
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
          </InputWrapper>

          <SignInButton onPress={handleSubmit} underlayColor="#cf5803">
            <SignInButtonText>Увійти</SignInButtonText>
          </SignInButton>

          <SignUpWrapper>
            <SignUpText>Немає аккаунту? </SignUpText>
            <TouchableOpacity>
              <SignUpButtonText>Зареєструватися</SignUpButtonText>
            </TouchableOpacity>
          </SignUpWrapper>
        </Container>
      </TouchableWithoutFeedback>
    </BackgroundView>
  );
};

export default LoginScreen;
