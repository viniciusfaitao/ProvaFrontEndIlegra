import styled from "styled-components";

export const PlanetBackground = styled.div`
  display: flex;
  place-content: center;
  flex-flow: wrap;
`;

export const PlanetList = styled.li`
  width: 350px;
  height: 450px;
  margin: 30px;
  border-radius: 15px;
  background-color: #000000d1;
  box-shadow: 0 0 20px #04ff18;
  color: white;
  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: center;
`;

export const PlanetListTitle = styled.div`
  margin: 10px;
  font-size: 18px;
  font-family: "Starjedi";
  text-transform: lowercase;
  color: #04ff18;
`;

export const PlanetListImage = styled.img`
  height: 275px;
  margin: 20px;
  border-radius: 10px;
`;

export const PlanetListButton = styled.button`
  width: 185px;
  font-size: 30px;
  font-family: "Starjhol";
  color: #04ff18;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  border: none;
  outline: 0;
`;
