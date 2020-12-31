import styled from "styled-components";

export const FilmBackground = styled.div`
  display: flex;
  place-content: center;
  flex-flow: wrap;
`;

export const FilmList = styled.div`
  width: 350px;
  height: 560px;
  margin: 30px;
  border-radius: 15px;
  background-color: #000000d1;
  box-shadow: 0 0 20px #04ff18;
  color: #fff;
  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: center;
`;

export const FilmListTitle = styled.div`
  margin: 10px;
  font-size: 18px;
  font-family: "Starjedi";
  text-transform: lowercase;
  color: #04ff18;
`;

export const FilmListImage = styled.img`
  width: 310px;
  height: 400px;
  margin: 20px;
  border-radius: 10px;
`;

export const FilmListButton = styled.button`
  width: 185px;
  font-size: 30px;
  font-family: "Starjhol";
  outline: 0;
  border: none;
  color: #04ff18;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
`;
