import React, { useEffect, useMemo, useState } from 'react';
import TextBanner from '../../components/TextBanner';
import styled from 'styled-components';
import first from '../../assets/images/team/1.jpg';
import ten from '../../assets/images/team/10.jpg';
import eleven from '../../assets/images/team/11.jpg';
import { colors } from '../../theme';
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

const GridItem = styled.div`
  flex-grow: 4;
  width: 340px;
  text-align: center;
  background-color: ${colors.darkBlueAngel};
`;

const RedTitle = styled.h2`
  color: #f9164b;
  font-size: 1.5rem;
  text-align: center;
  padding: 16px;
`;
const Paragraph = styled.h2`
  width: 80%;
  font-size: 14px;
  color: white;
  padding-bottom: 40px;
`;
const Team = () => {
  return (
    <TextBanner>
      <div style={{ width: '100%', padding: '32px 0', display: 'flex', justifyContent: 'center' }}>
        <Header1>The Team</Header1>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <GridItem>
          <img src={first} width={200} height={200} />
          <RedTitle>Founder/Development</RedTitle>
          <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Paragraph>
              {
                'Handles web development, rarity, art generation, smart contract development and integration with IMX. Will take lead in story development.'
              }
            </Paragraph>
          </div>
        </GridItem>
        <GridItem>
          <img src={ten} width={200} height={200} />
          <RedTitle>Lead Artist/Writer</RedTitle>
          <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Paragraph>
              {
                'UI/UX designer, drawer, and writer. She is behind the development of these beautiful characters and will take major role in story development.'
              }
            </Paragraph>
          </div>
        </GridItem>
        <GridItem>
          <img src={eleven} width={200} height={200} />
          <RedTitle>Head of Community</RedTitle>
          <div style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Paragraph>
              {
                'Drive reach and engagement to our awesome project. Make sure people know about what is being brought to this space.'
              }
            </Paragraph>
          </div>
        </GridItem>
      </div>
    </TextBanner>
  );
};

export default Team;
