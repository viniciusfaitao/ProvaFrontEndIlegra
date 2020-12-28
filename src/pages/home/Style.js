import styled from "styled-components";

export const HomeBackground = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 50px;
`;

export const HomeList = styled.div`
  margin-top: 20px;
  margin-bottom: 38px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 25px #ff0000;
  background: #000000d1;
  list-style: none;

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-flow: wrap;
  }

  li {
    margin: 10px;
    padding: 25px;
    font-size: 25px;
    list-style: none;
    cursor: pointer;

    &:hover {
      border-radius: 45px;
      border-bottom: 3px solid #ff0000;
    }

    a {
      color: white !important;
      text-decoration: none;

      div {
        color: white;
      }

      img {
        width: 120px;
      }
    }
  }
`;
