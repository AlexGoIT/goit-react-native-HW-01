import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },

  avatarWrapper: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
  },

  addAvatarButton: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 16,
    right: -12,
  },

  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    color: "#212121",
  },

  textInputWrapper: {
    width: "100%",
    marginTop: 33,
    marginBottom: 43,
    gap: 16,
  },

  textInput: {
    width: "100%",
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    fontFamily: "Roboto",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
  },

  passwordInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  passwordText: {
    position: "absolute",
    right: 16,
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },

  button: {
    width: "100%",
    marginBottom: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  buttonText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#fff",
  },

  signInText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },

  signIn: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});
