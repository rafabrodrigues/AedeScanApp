import { Avatar } from "react-native-paper";
import { AvatarTouchable } from "./style";
import theme from "../../theme";

const UploadAvatar = ({ onPress, image }) => {
  return (
    <AvatarTouchable onPress={onPress}>
      {image ? (
        <Avatar.Image size={170} source={{ uri: image }} />
      ) : (
        <Avatar.Icon
          size={170}
          icon="account-edit"
          style={{ backgroundColor: theme.colors.red }}
        />
      )}
    </AvatarTouchable>
  );
};

export default UploadAvatar;
