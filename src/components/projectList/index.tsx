import * as S from "./styled";
import * as T from "./types";

import * as U from "@/style/util";

function ProjectList({
  children,
  title,
  summary,
  func,
  skill,
  link,
  personnel,
  period,
}: T.ProjectListProps) {
  return (
    <S.Container>
      {children}
      <S.ProjectDescContainer>
        <S.ProjectTitle>
          <U.StrongText>{title}</U.StrongText>
        </S.ProjectTitle>
        <S.ProjectExpList>
          <S.ProjectExpTitle>#개요</S.ProjectExpTitle>
          <S.ProjectExp>{summary}</S.ProjectExp>
          <S.ProjectExpTitle>#기능</S.ProjectExpTitle>
          <S.ProjectExp>{func}</S.ProjectExp>
          <S.ProjectExpTitle>#활용 기술</S.ProjectExpTitle>
          <S.ProjectExp>{skill}</S.ProjectExp>
          <S.ProjectExpTitle>#인원</S.ProjectExpTitle>
          <S.ProjectExp>{personnel}</S.ProjectExp>
          <S.ProjectExpTitle>#기간</S.ProjectExpTitle>
          <S.ProjectExp>{period}</S.ProjectExp>
        </S.ProjectExpList>
        <S.ReadmeContainer>
          <S.ReadmeLink href={link} target='_blank'>
            README 보기
          </S.ReadmeLink>
        </S.ReadmeContainer>
      </S.ProjectDescContainer>
    </S.Container>
  );
}

export default ProjectList;
