import { TabBarButton, TabBarContainer } from "./TabBar.styled";
import { Feather } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }) => {
  const { options } = descriptors[state.routes[state.index].key];

  return (
    <TabBarContainer style={options.tabBarStyle}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;
        switch (label) {
          case "Posts":
            iconName = "grid";
            break;
          case "Create":
            iconName = "plus";
            break;
          case "Profile":
            iconName = "user";
            break;
        }

        return (
          <TabBarButton
            key={index}
            accessibilityRole="button"
            onPress={onPress}
            style={
              options.active
                ? { backgroundColor: "#FF6C00" }
                : { backgroundColor: "transparent" }
            }
          >
            <Feather
              name={iconName}
              size={24}
              color={options.active ? "#fff" : "#212121"}
            />
          </TabBarButton>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar;
