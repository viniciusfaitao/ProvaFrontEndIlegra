import React from "react";
import loading from "../../assets/gifs/loading.gif";
import loadingText from "../../assets/gifs/loadingText.gif";
import {
  LoadingPageBackground,
  LoadingPageImage,
  LoadingPageText,
} from "./Styled";

export const LoadingPage = () => {
  return (
    <LoadingPageBackground>
      <LoadingPageImage src={loading} />
      <LoadingPageText src={loadingText} />
    </LoadingPageBackground>
  );
};
