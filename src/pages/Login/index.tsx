import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react"; // Importe o useState

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    handleSubmit, // Adicione handleSubmit
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const [isFormValid, setIsFormValid] = useState(false); // Crie um estado para controlar a validação do formulário

  // Função para atualizar o estado de validação do formulário
  const updateFormValidity = (valid: boolean) => {
    setIsFormValid(valid);
  };

  const onSubmit = (data: IFormLogin) => {
    // Se o formulário for válido, faça algo com os dados
    if (isValid) {
      console.log("Dados do formulário:", data);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          
         
           <Button title="Entrar" disabled={!isValid} onClick={handleSubmit(onSubmit)} />
           

        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
