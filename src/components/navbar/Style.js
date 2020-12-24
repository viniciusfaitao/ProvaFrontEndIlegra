import styled from "styled-components";

export const NavbarBackground = styled.nav`
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  place-content: space-between;

  span {
    margin-left: 16px;
  }

  .background {
    position: absolute;
    top: 0px;
    bottom: 0;
    width: 300px;
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
      box-shadow: 0px 1px 10px black;
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

export const NavbarTitle = styled.div`
  width: 260px;
  margin-top: 45px;
  font-size: 50px;
  font-family: Starjhol;
  text-align: center;
  color: #ffde06;
  font-weight: bold;
  background-color: #000000d1;
  box-shadow: 0 0 30px #ffde06;
  border-bottom: 3px solid #ffde06;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-radius: 45px;

  h1 {
    margin: 0;
    z-index: 1;
  }

  .star {
    margin-top: 35px;
  }

  .wars {
    margin-top: -60px;
  }
`;

export const NavbarWelcome = styled.div`
  width: 150px;
  height: 100px;
  color: #ffde06;
  font-size: 15px;
  font-family: Starjhol;
`;
