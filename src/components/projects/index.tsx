import * as S from "./styled";

import ProjectList from "@/components/projectList";
import * as U from "@/style/util";

function Projects() {
  return (
    <U.Container>
      <U.Title mbValue={6.4}>PROJECTS.</U.Title>
      <S.ProjectsContainer>
        <ProjectList
          title='라프텔 클론코딩'
          summary='평소에 즐겨 이용하던 애니메이션 OTT 플랫폼 라프텔을 만들어보자! 라는 생각으로 시작한 라프텔 클론코딩 프로젝트입니다.'
          func='요일별 애니, 역대 인기 애니, 태그 검색, 별점, 리뷰 등의 기능을 제공합니다.'
          skill='React, TypeScript, Redux Toolkit, React Query, Styled-Components, Vite'
          link='https://github.com/ubububububub/laftel-clone'
          personnel='프로젝트 참가인원 총 2명 (프론트엔드 1명 / 백엔드 1명), 프론트엔드 담당'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/WjwS5Z0QO5c'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </ProjectList>
        <ProjectList
          title='새물'
          summary='엘리스 SW 엔지니어트랙 2차 프로젝트로 런드리고를 모티브로하여 개발한  우리 동네 세탁 O2O 플랫폼 프로젝트입니다.'
          func='상품별 가격, 세탁 주문, 파트너, 어드민 등의 기능을 제공합니다.'
          skill='React, JavaScript, Redux Toolkit, React Query, Styled-Components, Vite'
          link='https://github.com/elice-semul/FE-admin'
          personnel='프로젝트 참가 인원 총 6명(프론트엔드 4명 / 백엔드 2명), 프론트엔드 담당'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/41kb7er8WSw'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </ProjectList>
      </S.ProjectsContainer>
    </U.Container>
  );
}

export default Projects;
