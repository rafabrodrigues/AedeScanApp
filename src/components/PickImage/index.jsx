import { Modal } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  PickImageContainer,
  PickImageContent,
  PickImageButton,
  PickImageText,
} from "./style";

export const PickImage = ({
  visible,
  onRequestClose,
  setImage,
  setModalVisible,
}) => {
  const pickImageFromGallery = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão negada",
        "Você precisa conceder a permissão de acesso à galeria."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permissão negada",
        "Você precisa conceder a permissão de uso da câmera."
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setModalVisible(false);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <PickImageContainer>
        <PickImageContent>
          <PickImageButton onPress={takePhoto}>
            <PickImageText>Tirar foto</PickImageText>
          </PickImageButton>
          <PickImageButton onPress={pickImageFromGallery}>
            <PickImageText>Escolher foto existente</PickImageText>
          </PickImageButton>
        </PickImageContent>
      </PickImageContainer>
    </Modal>
  );
};

export default PickImage;
