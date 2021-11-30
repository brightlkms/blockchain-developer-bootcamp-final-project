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
const Story = () => {
  return (
    <TextBanner>
      <div style={{ width: '100%', padding: '32px 0', display: 'flex', justifyContent: 'center' }}>
        <Header1>Storyline</Header1>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Paragraph1>
          Angels' Grace is set in a world where humans and gods lived separately for centuries until one day, a Demon
          God Kaito wanted to resurrect a Demon God of destruction, Hasu on Earth. He sent thousands of demons through
          the gates within the angel capital to collect souls on Earth for resurrecting Hasu. Angels love the humans but
          could not reopen the gates, so they can only sacrifice their lives to give blessings for the humans to fight
          for their lives.
        </Paragraph1>
      </div>
    </TextBanner>
  );
};

export default Story;
