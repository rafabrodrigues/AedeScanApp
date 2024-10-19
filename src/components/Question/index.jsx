import React, { useState } from "react";
import {
  DuvidaContainer,
  TitleContainer,
  OpenDescription,
  QuestionDescription,
} from "./style";
import { Title } from "../Title";
import { SubTitle } from "../SubTitle";
import Entypo from "@expo/vector-icons/Entypo";
import theme from "../../theme";
const Question = ({ question, isDescriptionVisible }) => {
  const [titleSize, setTitleSize] = useState("16px");
  const [size, setSize] = useState("14px");
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  return (
    <DuvidaContainer>
      <TitleContainer>
        <Title size={titleSize} width={"90%"}>
          {question.titulo_duvidas}
        </Title>
        <OpenDescription
          onPress={() => setDescriptionVisible(!descriptionVisible)}
        >
          {descriptionVisible ? (
            <Entypo name="chevron-down" size={24} color={theme.colors.white} />
          ) : (
            <Entypo name="chevron-up" size={24} color={theme.colors.white} />
          )}
        </OpenDescription>
      </TitleContainer>
      <QuestionDescription
        size={size}
        isDescriptionVisible={descriptionVisible}
      >
        {question.descricao_duvidas}
      </QuestionDescription>
    </DuvidaContainer>
  );
};

export default Question;
