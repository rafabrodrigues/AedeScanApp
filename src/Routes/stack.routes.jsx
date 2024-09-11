import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabRoutes from "./TabRoutes";
import SignInScreen from "../screens/SignInScreen";
import SignUpStep1 from "../screens/SignUpStep1";
import SignUpStep2 from "../screens/SignUpStep2";
import PerfilScreen from "../screens/PerfilScreen";
import DenunciaScreen from "../screens/DenunciaScreen";
import BackButton from "../components/BackButton";
import theme from "../theme";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: {theme,colors,darkBlue},
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name="tabRoutes"
        component={TabRoutes}
        options={{
          headerShown: false, 
          title: "",
        }}
      />
      <Stack.Screen
        name="signInStack"
        component={SignInScreen}
        options={({ navigation }) => ({
          title: "",
          headerBackTitleVisible: false,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="signUpStep1"
        component={SignUpStep1}
        options={({ navigation }) => ({
          title: "",
          headerBackTitleVisible: false,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="signUpStep2"
        component={SignUpStep2}
        options={({ navigation }) => ({
          title: "",
          headerBackTitleVisible: false,
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen name="perfilStack" component={PerfilScreen} />
      <Stack.Screen name="denunciaStack" component={DenunciaScreen} />
    </Stack.Navigator>
  );
}
