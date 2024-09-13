import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import HomeScreen from "../../screens/HomeScreen";
import DuvidaScreen from "../../screens/DuvidaScreen";
import DenunciaScreen from "../../screens/DenunciaScreen";
import AvisoScreen from "../../screens/AvisoScreen";
import PerfilScreen from "../../screens/PerfilScreen";
import LoginScreen from "../../screens/LoginScreen";
// icons
import { Octicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// styles
import { DenunciaContainer, TextDenuncia } from "./style";
import { useAuth } from "../../hooks/useAuth"; // Adicione o hook useAuth
import theme from "../../theme";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { session } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.darkBlue,
          borderTopWidth: 0.18,
          height: 60,
        },
        tabBarActiveTintColor: theme.colors.red,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
          fontFamily: "Poppins_400Regular",
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={22} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="duvida"
        component={DuvidaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="question" color={color} size={22} />
          ),
          tabBarLabel: "Dúvidas",
        }}
      />

      <Tab.Screen
        name="denuncia"
        component={session ? DenunciaScreen : LoginScreen}
        options={{
          tabBarActiveTintColor: theme.colors.gray,
          tabBarIcon: ({ color, size }) => (
            <DenunciaContainer>
              <AntDesign name="warning" color={color} size={32} />
              <TextDenuncia>Denúncia</TextDenuncia>
            </DenunciaContainer>
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="aviso"
        component={AvisoScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={22} />
          ),
          tabBarLabel: "Avisos",
        }}
      />
      <Tab.Screen
        name="perfil"
        component={session ? PerfilScreen : LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="circle-user" color={color} size={22} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
