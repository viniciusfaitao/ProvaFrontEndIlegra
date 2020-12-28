import styled from "styled-components";

export const VehicleBackground = styled.div`
  display: flex;
  place-content: center;
  flex-flow: wrap;
`;

export const VehicleList = styled.li`
  width: 425px;
  height: 570px;
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

export const VehicleListTitle = styled.div`
  margin: 10px;
  font-size: 18px;
  font-family: "Starjedi";
  text-transform: lowercase;
  color: #04ff18;
`;

export const VehicleListImage = styled.img`
  width: 385px;
  height: 415px;
  margin: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const VehicleListButton = styled.button`
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
