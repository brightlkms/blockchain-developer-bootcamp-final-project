import React from 'react';
import styled from 'styled-components';

const Roadmap = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: black;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Montserrat-Regular !important;
  letter-spacing: 2px;
  font-size: 16px; ;
`;
const LanchRoad = styled.h3`
  padding: 15px 25px;
  margin-bottom: 20px;
  border: 3px solid #f9164b;
  width: auto;
  display: inline-block;
`;
const Precentage = styled.span`
  padding: 6px;
  font-size: 16px;
  color: white;
  background: #f9164b;
  border: 1px solid #f9164b;
`;
function RoadMap() {
  return (
    <Roadmap>
      <LanchRoad>LAUNCH MILESTONES</LanchRoad>
      <Precentage>25%</Precentage>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 48px',
          width: '85%',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ width: '100%' }}>
          Grow art department by onboarding talented writer and drawer to work closely with our lead to push out a
          professional manga.
        </p>
      </div>
      <Precentage>50%</Precentage>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 48px',
          width: '85%',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ width: '100%' }}>
          Grow our development team to speed up and increase the quality of our product including DAOs and Token
          developments.
        </p>
      </div>{' '}
      <Precentage>75%</Precentage>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 48px',
          width: '85%',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ width: '100%' }}>
          Create exclusive merchandise for selected holders through events in a form of iPhone cases, hoodies and
          T-shirts.
        </p>
      </div>{' '}
      <Precentage>100%</Precentage>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 48px',
          width: '85%',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ width: '100%' }}>
          To show our appreciation to our community, we will select 5 winners of two tickets to win a tour to Japan with
          an anime theme.
        </p>
      </div>{' '}
    </Roadmap>
  );
}

export default RoadMap;
