import * as S from "./styled";

import Svg from "@/components/svg";
import * as U from "@/style/util";

function Contact() {
  return (
    <S.Container>
      <U.Title mbValue={6.4}>CONTACT.</U.Title>
      <S.ContactList>
        <S.ContactItem>
          Tel. <U.StrongText>010-8634-1449</U.StrongText>
        </S.ContactItem>
        <S.ContactItem>
          Email. <U.StrongText>kimub1204@naver.com</U.StrongText>
        </S.ContactItem>
        <S.ContactItem>
          <Svg name='github' />
        </S.ContactItem>
      </S.ContactList>
    </S.Container>
  );
}

export default Contact;
