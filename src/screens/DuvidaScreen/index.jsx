import React, { useState, useEffect } from "react";
import { Container, QuestionList } from "./style";
import { supabase } from "../../Supabase/supabaseClient";
import Question from "../../components/Question";
import Loading from "../Loading";
export default function DuvidaScreen() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchQuestions = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("tab_duvidas").select();
    if (error) {
      alert("Erro ao buscar dados das dúvidas", error);
      setIsLoading(false);
      return;
    }
    setQuestions(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <QuestionList
        data={questions}
        renderItem={({ item }) => <Question question={item} />}
        keyExtractor={(item) => item.id_duvidas.toString()}
        contentContainerStyle={{ paddingBottom: 48 }}
      />
    </Container>
  );
}
