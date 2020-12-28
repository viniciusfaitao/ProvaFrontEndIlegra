import styled from "styled-components";

export const NavbarBackground = styled.nav`
  height: 80px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  place-content: space-between;

  span {
    margin-left: 16px;
  }

  .background {
    width: 300px;
    position: absolute;
    top: 0px;
    bottom: 0;
    z-index: 1;
    background: #ffde06;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      z-index: 1;
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
    z-index: 1;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 25px;

    &:hover {
      box-shadow: 0 0 30px #000;
      border-radius: 10px;
    }

    a {
      color: white;
      background: none;
      display: flex;
      align-items: center;
      text-decoration: none;
    }
  }
`;
