import styled from "styled-components";

export const LoadingPageBackground = styled.div`
  height: 340px;
  background-color: #000;
  box-shadow: 0 0 20px #04ff18;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 400px;
  }
`;

export const LoadingPageImage = styled.img`
  width: 480px;
  height: 340px;
  border-radius: 20px;
  position: absolute;

  @media (max-width: 767px) {
    width: 400px;
  }
`;

export const LoadingPageText = styled.img`
  margin-top: 65px;
  z-index: 1;
`;
