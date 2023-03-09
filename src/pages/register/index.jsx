import { Header } from "../../components/Header";
import { MdEmail, MdLock, MdPerson2 } from "react-icons/md";
import { Input } from "../../components/Input";
import {
  Container,
  Column,
  Wrapper,
  Title,
  TitleRegister,
  SubtitleRegister,
  PrivacyPolicyTerms,
  AlreadyRegistered,
} from "./styles";

import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";

const Register = () => {
  const { register, control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Wrapper>
            <Title>
              A plataforma para você aprender com experts, dominar as principais
              tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Wrapper>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubtitleRegister>
              Crie sua conta agora e make the change._
            </SubtitleRegister>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                leftIcon={<MdPerson2 />}
                name="name"
                control={control}
                placeholder="Nome Completo"
                {...register("name", { required: "mensagem de erro" })}
              />
              <Input
                leftIcon={<MdEmail />}
                name="email"
                control={control}
                placeholder="E-mail"
              />
              <Input
                leftIcon={<MdLock />}
                name="password"
                control={control}
                placeholder="Password"
              />
              <Button
                title="Criar minha Conta"
                variant="secondary"
                type="submit"
                onClick={onSubmit}
              />
            </form>
            <PrivacyPolicyTerms>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </PrivacyPolicyTerms>
            <AlreadyRegistered>
              Já tenho conta. <a href="/login">Fazer login</a>
            </AlreadyRegistered>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
