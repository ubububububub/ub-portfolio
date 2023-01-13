import * as S from "./styled";

import Svg from "@/components/svg";
import { skillsBottomLineMock, skillsTopLineMock } from "@/mock";
import * as U from "@/style/util";

const mapedSkillTopLine = skillsTopLineMock.map(({ name, title }, index) => (
  <S.SkillItem key={index}>
    <Svg name={name} />
    <S.SkillTitle>{title}</S.SkillTitle>
  </S.SkillItem>
));

const mapedSkillBottomLine = skillsBottomLineMock.map(
  ({ name, title }, index) => (
    <S.SkillItem key={index}>
      <Svg name={name} />
      <S.SkillTitle>{title}</S.SkillTitle>
    </S.SkillItem>
  ),
);

function Skills() {
  return (
    <U.Container>
      <U.Title mbValue={6.4}>SKILLS.</U.Title>
      <S.SkillsContainer>
        <S.SkillList>{mapedSkillTopLine}</S.SkillList>
        <S.SkillList>{mapedSkillBottomLine}</S.SkillList>
      </S.SkillsContainer>
    </U.Container>
  );
}

export default Skills;
