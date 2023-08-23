import { ActivityIndicator } from "react-native";
import { Backdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <Backdrop>
      <ActivityIndicator size="large" color={"#FF6C00"} />
    </Backdrop>
  );
};

export default Loader;
