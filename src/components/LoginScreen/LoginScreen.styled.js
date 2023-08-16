import { StyleSheet } from "react-native";

export const loginScreenStyles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  container: {
    width: "100%",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 144,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
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

  passwordButton: {
    position: "absolute",
    right: 16,
  },

  passwordText: {
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

  signInWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  signInText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },

  signInButtonText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#1B4371",
  },
});
