import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "../../screens/PostsScreen";
import CreatePostsScreen from "../../screens/CreatePostsScreen";
import ProfileScreen from "../../screens/ProfileScreen";

import BottomTabs from "../BottomTabs";
import LogoutButton from "../../components/LogoutButton";

const Tabs = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <Tabs.Navigator
      tabBar={(props) => <BottomTabs {...props} />}
      initialRouteName="Posts"
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "rgba(0, 0, 0, 0.30)",
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
          headerTitleAlign: "center",
          headerRight: () => <LogoutButton onLogout={handleLogout} />,
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          active: true,
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          tabBarStyle: {
            display: "none",
          },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#212121"
              onPress={navigation.goBack}
              style={{ marginLeft: 16 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        onLogout={handleLogout}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabsNavigation;
