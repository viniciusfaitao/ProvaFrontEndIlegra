import styled from "styled-components";

export const PeopleBackground = styled.div`
  display: flex;
  place-content: center;
  flex-flow: wrap;
`;

export const PeopleList = styled.li`
  width: 350px;
  height: 420px;
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

export const PeopleListTitle = styled.div`
  margin: 10px;
  font-size: 18px;
  font-family: "Starjedi";
  text-transform: lowercase;
  color: #04ff18;
`;

export const PeopleListImage = styled.img`
  width: 310px;
  height: 230px;
  margin: 20px;
  border-radius: 10px;
`;

export const PeopleListButton = styled.button`
  width: 185px;
  font-size: 30px;
  font-family: "Starjhol";
  border: none;
  outline: 0;
  color: #04ff18;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
`;
