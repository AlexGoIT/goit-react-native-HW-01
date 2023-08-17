import styles from "styled-components/native";

export const BackgroundView = styles.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styles.View`
  width: 100%;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 144px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
  align-items: center;
  justify-content: start;
`;

export const Title = styles.Text`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #212121;
`;

export const InputWrapper = styles.KeyboardAvoidingView`
  width: 100%;
  margin-top: 33px;
  margin-bottom: 43px;
  gap: 16px;
`;

export const Input = styles.TextInput`
  width: 100%;
  height: 50px;
  padding: 16px;
  background-color: #F6F6F6;
  font-size: 16px;
  font-family: Roboto;
  border-width: 1px;
  border-radius: 8px;
  border-color: #E8E8E8;
`;

export const PasswordInputWrapper = styles.View`
  flex-direction: row;
  align-items: center;
`;

export const PasswordButton = styles.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const PasswordButtonText = styles.Text`
  font-family: Roboto;
  font-size: 16px;
  color: #1B4371;
`;

export const SignInButton = styles.TouchableOpacity`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: #ff6c00;
`;

export const SignInButtonText = styles.Text`
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
`;

export const SignUpWrapper = styles.View`
  flex-direction: row;
  align-items: center;
`;

export const SignUpText = styles.Text`
  font-family: Roboto;
  font-size: 16px;
  color: #1B4371;
`;

export const SignUpButtonText = styles.Text`
  font-family: Roboto;
  font-size: 16px;
  color: #1B4371;
  text-decoration-line: underline;
  text-decoration-style: solid;
`;

export const ErrorText = styles.Text`
  font-family: Roboto;
  font-size: 10px;
  color: #ff0000;

`;
