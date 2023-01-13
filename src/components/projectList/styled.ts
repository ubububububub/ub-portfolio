import styled from "styled-components";

export const Container = styled.div`
  gap: 6.4rem;
  padding: 4.8rem;
  display: flex;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-items: center;
  border-radius: 4px;
`;

export const ProjectImg = styled.div`
  width: 416px;
  height: 287px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectDescContainer = styled.div``;

export const ProjectTitle = styled.h4`
  margin-bottom: 3.2rem;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.6rem;
`;

export const ProjectExpTitle = styled.dt`
  margin-top: 3.2rem;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.5rem;
`;

export const ProjectExpList = styled.dl`
  ${ProjectExpTitle}+${ProjectExpTitle} {
    margin-top: 1.6rem;
  }
`;

export const ProjectExp = styled.dd`
  font-size: 1.6rem;
  line-height: 2.3rem;
`;

export const ReadmeContainer = styled.div`
  padding-top: 6.4rem;
  display: flex;
  justify-content: flex-end;
`;

export const ReadmeLink = styled.a`
  cursor: pointer;
  display: block;
  padding: 1.6rem 3.2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
