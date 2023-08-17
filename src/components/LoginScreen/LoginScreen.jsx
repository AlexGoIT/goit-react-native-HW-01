import { TouchableOpacity } from "react-native";
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

const LoginScreen = () => {
  return (
    <BackgroundView source={bgImage}>
      <Container>
        <Title>Увійти</Title>

        <InputWrapper>
          <Input
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <PasswordInputWrapper>
            <Input
              placeholder="Пароль"
              textContentType="password"
              secureTextEntry
            />

            <PasswordButton>
              <PasswordButtonText>Показати</PasswordButtonText>
            </PasswordButton>
          </PasswordInputWrapper>
        </InputWrapper>

        <SignInButton underlayColor="#cf5803">
          <SignInButtonText>Увійти</SignInButtonText>
        </SignInButton>

        <SignUpWrapper>
          <SignUpText>Немає аккаунту? </SignUpText>
          <TouchableOpacity>
            <SignUpButtonText>Зареєструватися</SignUpButtonText>
          </TouchableOpacity>
        </SignUpWrapper>
      </Container>
    </BackgroundView>
  );
};

export default LoginScreen;
