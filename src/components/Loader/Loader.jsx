import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderCover } from "./Loader.styled"

export const Loader = () => {
  return (
    <LoaderCover>
      <ThreeDots
        height="70"
        width="70"
        radius="6"
        color="#0f225d;"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderCover>
  );
};