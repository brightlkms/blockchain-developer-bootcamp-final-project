import React from 'react';
import styled from 'styled-components';
const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Banner = ({ source }) => {
  console.log(source);
  return <BannerImage src={source} />;
};

export default Banner;
