import * as S from "./styled";

import * as U from "@/style/util";

function Education() {
  return (
    <U.Container>
      <U.Title mbValue={6.4}>EDUCATION.</U.Title>
      <S.EducationList>
        <S.EducationItem>
          <U.StrongText>동명대학교 게임공학과</U.StrongText> - 2016.03 ~ 2022.02
        </S.EducationItem>
        <S.EducationItem>
          <U.StrongText>코드스쿼드 프론트엔드</U.StrongText> - 2022.01 ~ 2022.07
        </S.EducationItem>
        <S.EducationItem>
          <U.StrongText>엘리스 SW 엔지니어 트랙</U.StrongText> - 2022.09 ~
          2022.12
        </S.EducationItem>
      </S.EducationList>
    </U.Container>
  );
}

export default Education;
