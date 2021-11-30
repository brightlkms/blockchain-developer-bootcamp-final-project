import React from 'react';
import styled from 'styled-components';

const RoadmapBlock = styled.div`
  display: flex;
  padding: 0 48px;
`;
const ContentWrapper = styled.div`
  padding: 32px;
  color: white;
`;

const RedTitle = styled.h2`
  color: #f9164b;
  font-size: 2rem;
`;

const MainTitle = styled.h2`
  color: white;
  font-weight: bolder;
  font-size: 1.5rem;
`;
function TimelineItem({ position, image, title, sec_title, text }) {
  return (
    <RoadmapBlock>
      {position == 'right' ? (
        <div style={{ maxWidth: '60%' }}>
          <ContentWrapper>
            <RedTitle>{title}</RedTitle>

            <MainTitle>{sec_title}</MainTitle>

            <p>{text}</p>
          </ContentWrapper>
        </div>
      ) : null}
      <div className={`${position}`}>
        <ContentWrapper>
          <img style={{ width: '90%' }} src={image} />
        </ContentWrapper>
      </div>
      {position == 'left' ? (
        <div style={{ maxWidth: '60%' }}>
          <ContentWrapper>
            <RedTitle>{title}</RedTitle>

            <MainTitle>{sec_title}</MainTitle>

            <p>{text}</p>
          </ContentWrapper>
        </div>
      ) : null}
    </RoadmapBlock>
  );
}

export default TimelineItem;
