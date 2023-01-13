import * as S from "./styled";

import ub from "@/assets/imgs/ub.jpg";
import * as U from "@/style/util";

function About() {
  return (
    <U.Container>
      <U.Title mbValue={6.4}>ABOUT.</U.Title>
      <S.ProfileContainer>
        <S.ProfileImg src={ub} alt='ub' />
        <S.ProfileDesc>
          저는 이런 <U.StrongText>사람</U.StrongText>입니다.
          <br /> - 타인의 의견을 경청하며 좋은 의견은 적극적으로 수용합니다.
          <br /> - 프로젝트에 필요한 기술과 트렌드를 따라가기 위해 꾸준히
          학습합니다.
          <br /> - 반복되는 코드를 줄이고 코드의 재사용성을 높이기 위해 늘
          고민하고 해답을 찾아냅니다.
          <br />
          <br />
          <br />
          저의 <U.StrongText>강점</U.StrongText>은 다음과 같습니다.
          <br /> - 책임감
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 팀 프로젝트를 진행하며 기능
          구현을 마감 기한에 맞추기 위해 최선을 다하여 개발하여 기한에 맞춘
          경험이 있습니다.
          <br /> - 빠른 개발 속도
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 팀 프로젝트를 진행하며 개발
          속도가 빠르다는 말을 동료에게 들은 적이 있으므로 자타공인으로 강점이라
          말씀드리겠습니다.
          <br />
          <br />
          <br />
          저는 다음과 같은 <U.StrongText>목표</U.StrongText>를 가지고 있습니다.
          <br />- 1년 차에는 맡은 일을 완벽히 완수하는 것
          <br />- 2 ~ 3년 차에는 1년 차에 했던 일을 보다 나은 방법으로 완수하고
          동료들에게 문제의 해결책을 찾는데 도움을 주는 것
          <br />- 4 ~ 5년 차에는 더 나은 성과를 내기 위해 문제와 해결책을 직접
          찾아내고 동료들과의 협업을 이끄는 것
          <br />
          <br />
          <br />
          페이스에 맞는 속도로 꾸준히 실력을 늘리는 개발자가 되겠습니다.
        </S.ProfileDesc>
      </S.ProfileContainer>
    </U.Container>
  );
}

export default About;
