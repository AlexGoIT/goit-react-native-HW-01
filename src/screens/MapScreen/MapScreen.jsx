import { useRoute } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = () => {
  const {
    params: {
      location: { latitude, longitude, name },
    },
  } = useRoute();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      mapType="standard"
      minZoomLevel={10}
      style={{ width: "100%", height: "100%" }}
    >
      <Marker coordinate={{ latitude, longitude }} title={name} />
    </MapView>
  );
};

export default MapScreen;
