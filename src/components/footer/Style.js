import styled from "styled-components";

export const FooterBackground = styled.div`
  height: 145px;
  margin-top: 50px;
  background-color: #000000f2;
  display: flex;
  align-items: center;
  place-content: space-between;
`;

export const FooterLeft = styled.div`
  margin-left: 20px;
  display: flex;

  img {
    width: 160px;
    height: 120px;
  }
`;

export const FooterCenter = styled.div``;

export const FooterRight = styled.div`
  margin-right: 20px;

  p {
    font-size: 15px;
    color: #ffde06;

    a {
      color: #ffde06;
    }
  }
`;
