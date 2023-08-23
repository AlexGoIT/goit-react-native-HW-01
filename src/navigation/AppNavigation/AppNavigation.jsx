import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from "../../screens/RegistrationScreen";
import BottomTabsNavigation from "../BottomTabsNavigation";

import CommentsScreen from "../../screens/CommentsScreen";
import MapScreen from "../../screens/MapScreen";

const MainStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Home" component={BottomTabsNavigation} />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: true,
            headerTitle: "Коментарі",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: true,
            headerTitle: "Мапа",
            headerTitleAlign: "center",
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
