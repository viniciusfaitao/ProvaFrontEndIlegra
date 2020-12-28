import styled from "styled-components";

export const HeaderBackground = styled.div`
  height: 130px;
  margin-bottom: 120px;
  display: flex;
  align-items: center;
  place-content: space-between;
`;

export const HeaderLeft = styled.div`
  width: 150px;
`;

export const HeaderCenter = styled.div`
  width: 340px;
  margin-top: 25px;
  font-size: 47px;
  font-family: Starjhol;
  text-align: center;
  color: #ffde06;
  font-weight: bold;
  background-color: #000000d1;
  box-shadow: 0 0 30px #ffde06;
  border-bottom: 3px solid #ffde06;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 45px;

  h1 {
    margin: 0;
    z-index: 1;
  }

  .star {
    margin-top: 20px;
  }

  .wars {
    margin-top: -75px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  margin-top: 10px;
  display: flex;

  p {
    width: 160px;
    font-size: 25px;
    font-family: Starjhol;
    color: #ffde06;
  }
`;
