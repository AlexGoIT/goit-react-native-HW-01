import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen";

// import Home from "./src/screens/Home/Home";
// import PostsScreen from "./src/screens/PostsScreen";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import CommentsScreen from "./src/screens/CommentsScreen";

import AppNavigation from "./src/navigation/AppNavigation";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Home" component={AppNavigation} />

        {/* <MainStack.Screen name="Home" component={Home} /> */}
        {/* <MainStack.Screen name="Posts" component={PostsScreen} /> */}
        {/* <MainStack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <MainStack.Screen name="Comments" component={CommentsScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
