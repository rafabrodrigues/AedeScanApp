import { View, Text } from "react-native";
import { useState } from "react";

import { Container, InputContainer } from "./styles";
import InputSmooth from "./../../components/InputSmooth/";
import MaskInput from "react-native-mask-input";
export default function SignUpStep2() {
  const [creditCard, setCreditCard] = useState("");

  return (
    <MaskInput
      value={creditCard}
      mask={creditCardMask}
      showObfuscatedValue
      obfuscationCharacter="#"
      onChangeText={(masked, unmasked, obfuscated) => {
        setCreditCard(unmasked); // you can use the masked value as well

        // assuming you typed "1234123412341234":
        console.log(masked); // "1234 1234 1234 1234"
        console.log(unmasked); // "1234123412341234"
        console.log(obfuscated); // "1234 #### #### 1234"
      }}
    />
  );
}
