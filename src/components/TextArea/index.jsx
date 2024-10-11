import styled from "styled-components/native";
import InputSmooth from "../InputSmooth";
export const TextArea = styled(InputSmooth)`
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.theme.colors.darkBlue2};
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 0;
  padding-bottom: 0;
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  font-family: "Poppins_400Regular";
  text-align: top;
  border: 1px solid ${(props) => props.theme.colors.blueGray};
`;
