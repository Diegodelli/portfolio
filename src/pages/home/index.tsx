// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, me chamo {userData.nameUser}.</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                amo
              </Text>{" "}
              criar e{" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolver
              </Text>{" "}
              projetos!
            </Text>
            <Text type="body1" color="grey2">
              Com mais de uma década de experiência no ramo comercial, adquiri
              habilidades sólidas em comunicação, negociação e trabalho em
              equipe. Minha transição para a área de tecnologia em 2021
              demonstra minha determinação em buscar novos desafios e me adaptar
              a ambientes dinâmicos.
            </Text>
            <Text type="body1" color="grey2">
              Como profissional, destaco-me pela minha capacidade de colaboração
              e disposição para compartilhar conhecimentos. Acredito que o
              sucesso é alcançado coletivamente, e minha abordagem centrada na
              equipe contribui para um ambiente de trabalho positivo e
              produtivo.
            </Text>
            <Text type="body1" color="grey2">
              Minha experiência comercial de uma década proporcionou-me uma
              compreensão profunda das necessidades dos clientes e a capacidade
              de desenvolver relacionamentos sólidos. Ao migrar para a área de
              tecnologia, combinei essa expertise com uma paixão pela inovação e
              resolução de problemas.
            </Text>
            <Text type="body1" color="grey2">
              Contratar-me significa trazer para a equipe um profissional
              determinado, adaptável e comprometido em impulsionar o sucesso da
              sua organização. Estou entusiasmado para aplicar minha bagagem de
              habilidades e experiência, contribuindo para o crescimento e a
              excelência da organização.
            </Text>
            <Text type="body1" color="grey2">
              Conheça aqui neste ambiente, criado especialmente para você,
              alguns dos meus projetos e as tecnologias que possuo domínio.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código-fonte do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand5">
                  projetos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
