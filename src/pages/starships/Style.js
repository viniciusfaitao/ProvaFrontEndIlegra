import styled from "styled-components";

export const StarshipBackground = styled.div`
  display: flex;
  place-content: center;
  flex-flow: wrap;
`;

export const StarshipList = styled.li`
  width: 370px;
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

export const StarshipListTitle = styled.div`
  margin: 10px;
  font-size: 18px;
  font-family: "Starjedi";
  text-transform: lowercase;
  color: #04ff18;
`;

export const StarshipListImage = styled.img`
  width: 325px;
  height: 275px;
  margin: 20px;
  border-radius: 10px;
`;

export const StarshipListButton = styled.button`
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
