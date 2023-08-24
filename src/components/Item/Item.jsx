import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image } from "react-native";
import {
  ItemWrapper,
  ItemTitle,
  ItemDescriptionWrapper,
  CommentIcon,
  MapPinIcon,
  LocationText,
  CommentCounter,
  LikeIcon,
  LikesCounter,
  MapPinButton,
} from "./Item.styled";

const Item = ({ item }) => {
  const navigation = useNavigation();

  const { image, title, location, comments, likes } = item;
  const commentsCount = comments.length;

  return (
    <ItemWrapper>
      <Image
        src={image}
        alt={title}
        style={{ width: "100%", height: 240, borderRadius: 8 }}
      />
      <ItemTitle>{title}</ItemTitle>

      <ItemDescriptionWrapper>
        <TouchableOpacity
          onPress={() => navigation.navigate("Comments", { id: item.id })}
        >
          <CommentIcon
            name="message-circle"
            size={24}
            color={commentsCount > 0 ? "#FF6C00" : "#BDBDBD"}
          />
        </TouchableOpacity>
        <CommentCounter
          style={
            commentsCount > 0 ? { color: "#212121" } : { color: "#BDBDBD" }
          }
        >
          {commentsCount}
        </CommentCounter>

        <LikeIcon
          name="thumbs-up"
          size={24}
          color={likes > 0 ? "#FF6C00" : "#BDBDBD"}
        />
        <LikesCounter
          style={likes > 0 ? { color: "#212121" } : { color: "#BDBDBD" }}
        >
          {likes}
        </LikesCounter>

        <MapPinButton onPress={() => navigation.navigate("Map", { location })}>
          <MapPinIcon name="map-pin" size={24} color="#BDBDBD" />
        </MapPinButton>
        <LocationText>{location.name}</LocationText>
      </ItemDescriptionWrapper>
    </ItemWrapper>
  );
};

export default Item;
