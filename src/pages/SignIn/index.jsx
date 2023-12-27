
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { auth } from "../../services/firebaseConfig";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";


export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }

  return (
    <Container>
      <Form>
        <h1>Recicla-se</h1>
        <p>Solução para descarte de resíduos sólidos recicláveis aliando Inovação e Sustentabilidade!</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={(e) => setEmail(e.target.value)}/>

        <Input placeholder="Senha" type="password" icon={FiLock}  onChange={(e) => setPassword(e.target.value)}/>

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">
            Criar conta
        </Link>
           
        
      </Form>
      <Background/>
    </Container>
  );
}
