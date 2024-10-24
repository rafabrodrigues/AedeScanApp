import React, { useState, useEffect } from "react";
import {
  Container,
  DataUserContainer,
  IdentifierContainer,
  CardStyle,
  style,
} from "./styles";
import { Avatar, Card, IconButton, useTheme } from "react-native-paper";
import { Title } from "../../components/Title";
import { ButtonWithLeftIcon } from "../../components/Button";
import { TouchableOpacity } from "react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "./../../Supabase/supabaseClient";
import { getUserId } from "../../utils/getUserId";
import Loading from "../Loading";
import { useAuth } from "../../hooks/useAuth";
import LoginScreen from "../LoginScreen";
export default function PerfilScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const navigation = useNavigation();

  async function getUserById(userId) {
    const { data, error } = await supabase
      .from("tab_users")
      .select("*")
      .eq("id_users", userId);

    if (error) {
      console.error("Erro ao buscar o usuário:", error);
      return null;
    }

    console.log("Dados do usuário:", data);

    return data;
  }

  const fetchUser = async () => {
    setIsLoading(true);
    const user = await supabase.auth.getUser();
    setUser(user);
    if (user) {
      const userData = await getUserById(
        "8f50ca7e-7918-4e88-9d91-4ba00fb888fd"
      );

      if (userData) {
        setName(userData[0].name_users);
        setEmail(userData[0].email_users);
        setCpf(userData[0].cpf_users);
        console.log("Usuário carregado:", { name, email, cpf });
      } else {
        console.log("Usuário não encontrado.");
      }
    } else {
      console.log("Usuário não autenticado.");
    }
    setIsLoading(false);
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    navigation.navigate("home");
  };

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    console.log('Session:', session)
    if (session) {
      fetchUser();
    }
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <IdentifierContainer>
        <Avatar.Image
          size={128}
          source={require("../../../assets/rafael.jpg")}
        />
        <Title size="20px" color={theme.colors.white}>
          {name}
        </Title>
      </IdentifierContainer>
      <DataUserContainer>
        <Card.Title
          title="Email"
          subtitle={email}
          style={style.cardStyle}
          titleStyle={style.titleStyle}
          subtitleStyle={style.subtitleStyle}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="email"
              color={theme.colors.blueGray}
              style={style.iconStyle}
            />
          )}
        />
        <Card.Title
          title="CPF"
          subtitle={cpf}
          style={style.cardStyle}
          titleStyle={style.titleStyle}
          subtitleStyle={style.subtitleStyle}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon="account"
              color={theme.colors.blueGray}
              style={style.iconStyle}
            />
          )}
        />
        <Card.Title
          title="Data de nascimento"
          subtitle="12/08/2006"
          style={style.cardStyle}
          titleStyle={style.titleStyle}
          subtitleStyle={style.subtitleStyle}
          left={(props) => (
            <Avatar.Icon
              {...props}
              color={theme.colors.blueGray}
              icon="calendar-range"
              style={style.iconStyle}
            />
          )}
        />
        <TouchableOpacity>
          <Card.Title
            subtitle="Editar Perfil"
            style={style.cardStyle}
            titleStyle={style.titleStyle}
            subtitleStyle={style.subtitleStyle}
            left={(props) => (
              <Avatar.Icon
                {...props}
                color={theme.colors.blueGray}
                icon="lead-pencil"
                style={style.iconStyle}
              />
            )}
            right={(props) => (
              <IconButton
                {...props}
                icon="chevron-right"
                onPress={fetchUser}
                iconColor={theme.colors.white}
              />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={signOut}>
          <Card.Title
            subtitle="Sair da conta"
            style={style.cardStyle}
            titleStyle={style.titleStyle}
            subtitleStyle={style.logoutText}
            left={(props) => (
              <Avatar.Icon
                {...props}
                color={theme.colors.red}
                icon="logout"
                style={style.iconStyle}
              />
            )}
          />
        </TouchableOpacity>
      </DataUserContainer>
    </Container>
  );
}
