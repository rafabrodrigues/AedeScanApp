import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";
const LoadingContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.darkBlue};
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={theme.colors.red} />
    </LoadingContainer>
  );
};

export default Loading;
