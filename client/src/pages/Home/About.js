import React, { useEffect, useMemo, useState } from 'react';
import TextBanner from '../../components/TextBanner';
import styled from 'styled-components';
const Header1 = styled.h3`
  border-bottom: 2px solid red;
  padding-bottom: 8px;
  color: white;
  max-width: 150px;
`;
const Paragraph1 = styled.div`
  padding-bottom: 32px;
  width: 60%;
  line-height: 1.5;
  font-size: 16px;
  text-align: center;
  color: white;
`;
const About = () => {
  return (
    <TextBanner>
      <div style={{ width: '100%', padding: '32px 0', display: 'flex', justifyContent: 'center' }}>
        <Header1>About</Header1>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Paragraph1>
          Angels' Grace is an anime NFT project launching on IMX with 8,888 supply. Our vision is to create the best
          anime that was backed by NFTs. We are still early in the NFT space and the power is coming back to the
          creators. Why is it that a multi billion dollars industry like anime are failing to payout the true talent
          behind the success? With the help of DAO and tokenization we believe that we can change all of this to truly
          help the great creators of our time.
        </Paragraph1>
      </div>
    </TextBanner>
  );
};

export default About;
