import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "../PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import LogoutButton from "../../components/LogoutButton";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import TabBar from "../../components/TabBar";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <Tabs.Navigator
      tabBar={(props) => <TabBar {...props} />}
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

export default Home;
