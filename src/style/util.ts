import styled, { css } from "styled-components";

const getTitleMarginBottom = (mbValue = 0) => {
  return `${mbValue}rem`;
};

export const Container = styled.section`
  padding: 12.8rem 6.4rem;
`;

export const FlexCenterSort = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StrongText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h3<{ mbValue: number }>`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.6rem;
  margin-bottom: ${({ mbValue }) => getTitleMarginBottom(mbValue)};
`;
