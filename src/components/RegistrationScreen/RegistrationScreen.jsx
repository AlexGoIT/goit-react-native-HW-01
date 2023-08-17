import { TouchableOpacity } from "react-native";
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

const RegistrationScreen = () => {
  return (
    <BackgroundView source={bgImage}>
      <Container>
        <AvatarWrapper>
          <AddAvatarButtonWrapper>
            <AddAvatarButtonImage source={addImage} />
          </AddAvatarButtonWrapper>
        </AvatarWrapper>

        <Title>Реєстрація</Title>

        <InputWrapper>
          <Input placeholder="Логін" />
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

        <SignUpButton onPress={() => {}} underlayColor="#cf5803">
          <SignUpButtonText>Зареєструватися</SignUpButtonText>
        </SignUpButton>

        <SignInWrapper>
          <SignInText>Вже є акаунт? </SignInText>

          <TouchableOpacity>
            <SignInButtonText>Увійти</SignInButtonText>
          </TouchableOpacity>
        </SignInWrapper>
      </Container>
    </BackgroundView>
  );
};

export default RegistrationScreen;
