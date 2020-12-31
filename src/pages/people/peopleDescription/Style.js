import styled from "styled-components";

export const PeopleDescriptionBackground = styled.div`
  display: flex;
  justify-content: center;
`;

export const PeopleDescriptionBox = styled.div`
  margin: 50px;
  border-radius: 45px;
  background-color: #000000d1;
  box-shadow: 0 0 20px #42d0fb;
  font-size: 15px;
  font-family: inherit;
  display: flex;
  align-items: center;
  text-align: center;
  flex-flow: wrap;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 370px;
  }
`;

export const PeopleDescriptionHead = styled.div`
  margin-top: 25px;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    width: 310px;
    height: 230px;
    margin: 20px;
    border-radius: 10px;
  }

  p {
    margin: 10px;
    color: #42d0fb;
    font-size: 35px;
    font-family: "Stjedise";
  }
`;

export const PeopleDescriptionBody = styled.div`
  margin: 25px 25px 25px 40px;
  font-size: 15px;
  color: #42d0fb;
  display: flex;
  text-align: center;
  flex-flow: wrap;

  div {
    margin: 25px;
  }

  h3 {
    color: #fff;
    margin: 0;
    font-size: 25px;
    margin: 10px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    overflow-wrap: anywhere;
  }
`;

export const PeopleDescriptionFooter = styled.div`
  height: 100px;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;

  button {
    width: 185px;
    margin-right: 40px;
    font-size: 30px;
    font-family: "Starjhol";
    border: none;
    outline: 0;
    color: #42d0fb;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
  }
`;
