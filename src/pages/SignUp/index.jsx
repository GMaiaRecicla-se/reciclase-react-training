import { Container, Form, Background } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { auth, firestore } from "../../services/firebaseConfig"; 
import { Button } from "../../components/Button"
import { Link, useNavigate} from "react-router-dom";
import { Input } from "../../components/Input";
import { MdOutlineNumbers } from "react-icons/md";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export function SignUp() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSignUp = async () => {
        try {
          // Criação do usuário utilizando o Firebase Authentication
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
    
          // Salvar os dados adicionais no Firestore
          await setDoc(doc(firestore, "usuarios", user.uid), {
            name,
            cpf,
            email
          });
    
          // Limpa os campos do formulário após o cadastro
          setName("");
          setCpf("");
          setEmail("");
          setPassword("");

          alert("Cadastro realizado com sucesso!")
    
          navigate("/")
          
        } catch (error) {
          console.error("Erro ao criar usuário:", error);
          alert("Erro ao criar usuário. Verifique os dados e tente novamente.");
        }
      };

  return (
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicaçãp para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} onChange={(e) => setName(e.target.value)} />

        <Input placeholder="CPF" type="text" icon={MdOutlineNumbers} onChange={(e) => setCpf(e.target.value)} />


        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={(e) => setEmail(e.target.value)}  />

        <Input placeholder="Senha" type="password" icon={FiLock}  onChange={(e) => setPassword(e.target.value)}/>

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
            Voltar para o login
        </Link>
           
        
      </Form>
      
    </Container>
  );
}
