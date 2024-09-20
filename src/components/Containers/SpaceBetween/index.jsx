import styled from "styled-components/native";
export const SpaceBetween = styled.View`
  width: ${(props) => props.width || "100%"};
  justify-content: space-between;
  flex-direction: row;
`;
