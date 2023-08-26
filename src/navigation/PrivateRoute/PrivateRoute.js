import { useSelector } from "react-redux";
import { selectIsAuthorized } from "../../redux/auth/authSelectors";
import { useNavigation } from "@react-navigation/native";

const PrivateRoute = ({ redirect, children }) => {
  const navigation = useNavigation();
  const isAuthorized = useSelector(selectIsAuthorized);

  return isAuthorized ? children : navigation.navigate(redirect);
};

export default PrivateRoute;
