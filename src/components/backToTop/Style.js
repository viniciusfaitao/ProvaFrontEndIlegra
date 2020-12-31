import styled from "styled-components";

export const ScrollTop = styled.div`
  width: 100%;
  height: 0px;
  position: fixed;
  bottom: 85px;
  z-index: 1000;
  opacity: 0.5;
  color: #fff;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  display: flex;
  justify-content: flex-end;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 85px;
    height: 75px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
