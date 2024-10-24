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
import { getUserById } from "./../../Supabase/getUserById";

import { getUserId } from "../../utils/getUserId";
import { formatDate } from "../../utils/formatDate";

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

  const fetchUser = async ({id}) => {
    console.log("ID ", id)
    setIsLoading(true);
      const userData = await getUserById(
        id
      );

      console.log(userData)

      if (userData) {
        setName(userData[0].name_users);
        setEmail(userData[0].email_users);
        setCpf(userData[0].cpf_users);
        setDateBirth(userData[0].date_birth_users);
        console.log("Usuário carregado:", { name, email, cpf });
      } else {
        console.log("Usuário não encontrado.");
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
    function handleGetUser() {
      console.log("handleGetUser");
        supabase.auth.getSession().then(({ data: { session } }) => {
          console.log('Session L79: ', session)
          setSession(session);

          setUser(fetchUser({id: session.user.id}));
        })
        .catch(e => console.log(e));

      // supabase.auth.onAuthStateChange((_event, session) => {
      //   setSession(session);
      // });
      //console.log('Supabase: ', supabase)
    
        // console.log('Session L92:', session)
        // if (session) {
          
        // }
    }

    handleGetUser();
  }, []);

  if (isLoading || !user) {
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
          title="Data de nascimen"
          subtitle={formatDate(dateBirth)}
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
