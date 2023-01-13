import styled from "styled-components";

import { FlexCenterSort } from "@/style/util";

export const Container = styled.section`
  padding: 6.4rem;
`;

export const SkillList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkillsContainer = styled.div`
  padding: 0 17.6rem;

  ${SkillList}+${SkillList} {
    margin-top: 8.6rem;
  }
`;

export const SkillItem = styled.li`
  ${FlexCenterSort};
  flex-direction: column;
`;

export const SkillTitle = styled.h4`
  margin-top: 1.6rem;
  font-weight: 700;
  font-size: 2.6rem;
`;
