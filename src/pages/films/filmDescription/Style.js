import styled from "styled-components";

export const FilmDescriptionBackground = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilmDescriptionBox = styled.div`
  max-width: 900px;
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
`;

export const FilmDescriptionHead = styled.div`
  color: #fff;
  margin-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    width: 310px;
    height: 400px;
    margin: 20px;
    border-radius: 10px;
  }

  p {
    color: #42d0fb;
    font-size: 35px;
    font-family: "Stjedise";
    margin: 10px;
  }
`;

export const FilmDescriptionBody = styled.div`
  margin: 25px 25px 25px 40px;
  font-size: 15px;
  color: #42d0fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  align-items: start;
  flex-flow: wrap;

  h3 {
    color: #fff;
    margin: 0;
    font-size: 25px;
    margin: 10px;
  }

  h4 {
    color: #fff;
    margin: 0;
    font-size: 15px;
    margin: 10px;
  }
`;

export const FilmDescriptionFooter = styled.div`
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
