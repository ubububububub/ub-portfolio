import styled from "styled-components";

export const Container = styled.section`
  padding: 12.8rem 6.4rem 18rem;
`;

export const EducationItem = styled.li``;

export const EducationList = styled.ul`
  font-weight: 700;
  font-size: 3.2rem;
  text-align: center;

  ${EducationItem}+${EducationItem} {
    margin-top: 2.4rem;
  }
`;
