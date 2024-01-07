import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { projectsData } from "@/utils/projectsData";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  repository_url: string;
  homepage_url: string;
}

export const Project = (): JSX.Element => {
  const [projects, setProjects] = useState<ReposType[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <>
      {projects!.map((project: ReposType) => (
        <ProjectWrapper key={project.id}>
          <ProjectTitle
            as="h2"
            type="heading3"
            css={{ marginBottom: "$3" }}
            color="grey4"
          >
            {project.name}
          </ProjectTitle>
          <ProjectStack>
            <Text type="body2" color="grey2">
              Primary Language:
            </Text>
            <ProjectStackTech>
              <Text color="grey2" type="body2">
                {project.language}
              </Text>
            </ProjectStackTech>
          </ProjectStack>

          <Text type="body1" color="grey2">
            {project.description}
          </Text>
          <ProjectLinks>
            <ProjectLink target="_blank" href={project.repository_url}>
              <FaGithub /> Github Code
            </ProjectLink>

            {project.homepage_url ? (
              <ProjectLink target="_blank" href={project.homepage_url}>
                <FaShare /> See demo
              </ProjectLink>
            ) : (
              <Text as="p" type="body1" color="grey2">
                Projeto não possui deploy para visualização
              </Text>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};
