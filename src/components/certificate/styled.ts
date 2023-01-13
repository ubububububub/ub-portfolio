import styled from "styled-components";

export const Container = styled.section`
  padding: 12.8rem 6.4rem 18rem;
`;

export const CertificateItem = styled.li``;

export const CertificateList = styled.ul`
  font-weight: 700;
  font-size: 3.2rem;
  text-align: center;

  ${CertificateItem}+${CertificateItem} {
    margin-top: 2.4rem;
  }
`;
