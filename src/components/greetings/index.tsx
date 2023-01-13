import * as S from "./styled";

import * as U from "@/style/util";

function Greetings() {
  return (
    <S.Container>
      <S.GreetingsText>
        안녕하세요!
        <br />
        새로운 기술과 트렌드를 꾸준히 학습하고 따라가려고 하는
        <br />
        프론트엔드 개발자 <U.StrongText>김유범</U.StrongText>입니다.
      </S.GreetingsText>
    </S.Container>
  );
}

export default Greetings;
