import { useSelector } from "react-redux";
import { selectIsAuthorized } from "../../redux/auth/authSelectors";
import { useNavigation } from "@react-navigation/native";

const PublicRoute = ({ redirect, restricted = false, children }) => {
  const navigation = useNavigation();
  const isAuthorized = useSelector(selectIsAuthorized);

  return isAuthorized && restricted ? navigation.navigate(redirect) : children;
};

export default PublicRoute;
