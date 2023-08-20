import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";

import PostsScreen from "./src/screens/PostsScreen";
import Home from "./src/screens/Home/Home";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import CommentsScreen from "./src/screens/CommentsScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Posts" component={PostsScreen} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
