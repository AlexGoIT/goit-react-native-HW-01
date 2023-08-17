import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import bgImage from "../../../assets/bg_photo.png";
import addImage from "../../../assets/add.png";

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
} from "./RegistrationScreen.styled";
import { useReducer, useState } from "react";

import { useInputFormReducer } from "../../hooks/useInputFormReducer";

const RegistrationScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [inputsValue, dispatch] = useReducer(useInputFormReducer, {
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = inputsValue;

  const handleSubmit = () => {
    console.log(inputsValue);

    dispatch({ type: "name", payload: "" });
    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
  };

  return (
    <BackgroundView source={bgImage}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <AvatarWrapper>
            <AddAvatarButtonWrapper>
              <AddAvatarButtonImage source={addImage} />
            </AddAvatarButtonWrapper>
          </AvatarWrapper>

          <Title>Реєстрація</Title>

          <InputWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
          </InputWrapper>

          <SignUpButton onPress={handleSubmit} underlayColor="#cf5803">
            <SignUpButtonText>Зареєструватися</SignUpButtonText>
          </SignUpButton>

          <SignInWrapper>
            <SignInText>Вже є акаунт? </SignInText>
            <TouchableOpacity>
              <SignInButtonText>Увійти</SignInButtonText>
            </TouchableOpacity>
          </SignInWrapper>
        </Container>
      </TouchableWithoutFeedback>
    </BackgroundView>
  );
};

export default RegistrationScreen;
