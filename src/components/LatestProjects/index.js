import REPOS from "Config/repos";
import { Title, BlogPostTitle, Link, Mono } from "Common/Text";
import SvgIcon from "Common/SvgIcon";
import Row from "Common/Row";
import * as S from "./styles";

const LatestProjects = () => {
  return (
    <S.ProjectsContainer>
      <Title>Latest Projects</Title>
      <Row justify="flex-start" noWrap scroll>
        {REPOS.map((repo) => (
          <a
            key={repo.label}
            target="_blank"
            rel="noopener noreferrer"
            href={repo.repo ? `https://github.com/${repo.repo}` : repo.link}
          >
            <S.ProjectsCard margin={32}>
              <BlogPostTitle>{repo.label}</BlogPostTitle>
              <Row justify="flex-start" align="center" paddingInner={0} noWrap>
                <Link>{repo.repo || repo.link}</Link>
                {repo.repo ? (
                  <SvgIcon src="github.svg" color={"white"} />
                ) : (
                  <span>{"🔗"}</span>
                )}
              </Row>
              <Mono>{repo.description}</Mono>
              {repo.logoUrl && <img src={repo.logoUrl} />}
            </S.ProjectsCard>
          </a>
        ))}
      </Row>
    </S.ProjectsContainer>
  );
};

export default LatestProjects;
