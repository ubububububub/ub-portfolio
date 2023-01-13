import styled from "styled-components";

export const Container = styled.section`
  padding: 12.8rem 6.4rem 18rem;
`;

export const ContactItem = styled.li``;

export const ContactList = styled.ul`
  font-weight: 700;
  font-size: 3.2rem;
  text-align: center;

  ${ContactItem}+${ContactItem} {
    margin-top: 2.4rem;
  }
`;
