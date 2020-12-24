import styled from "styled-components";

export const HomeBackground = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const HomeList = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 50px;
  box-shadow: 0 0 30px #ffde06;
  background: #000000d1;
  list-style: none;

  button {
    width: 80px;
    height: 80px;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    border-radius: 50%;
    background: transparent;
  }

  ul {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-flow: wrap;
    padding: 0;
  }

  li {
    list-style: none;
    cursor: pointer;
    font-size: 25px;
    margin: 10px;
    padding: 25px;

    &:hover {
      box-shadow: 0 0 30px #ffde06;
      border-radius: 10px;
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
