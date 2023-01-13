import * as S from "./styled";

import * as U from "@/style/util";

function Certificate() {
  return (
    <U.Container>
      <U.Title mbValue={6.4}>CERTIFICATE.</U.Title>
      <S.CertificateList>
        <S.CertificateItem>
          <U.StrongText>웹디자인기능사</U.StrongText> - 2020.12
        </S.CertificateItem>
        <S.CertificateItem>
          <U.StrongText>정보처리기사</U.StrongText> - 2021.06
        </S.CertificateItem>
      </S.CertificateList>
    </U.Container>
  );
}

export default Certificate;
