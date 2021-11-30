import React, { Fragment } from 'react';
import first_image from '../../assets/images/timeline/8.png';
import sec_image from '../../assets/images/timeline/4.png';
import third_image from '../../assets/images/timeline/Halo.png';
import forth_image from '../../assets/images/timeline/7.png';
import styled from 'styled-components';
import TimelineItem from './items/TimelineItem';

const TextStyle = styled.div`
  display: flex;
  padding: 50px 0 30px 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const H1_title = styled.h3`
  border-bottom: 2px solid red;
  padding-bottom: 15px;
  color: white;
`;
function Timeline() {
  return (
    <div style={{ backgroundColor: '#021f3c' }}>
      <TextStyle>
        <div>
          <H1_title>Roadmap</H1_title>
        </div>
      </TextStyle>
      <div className="timeline">
        <TimelineItem
          position="right"
          image={first_image}
          title="Great Manga Journey Begins"
          sec_title="Full story line and character development finalized"
          text="We will partner with more manga writers and artists to help bring our story to life. This means increasing the size of the team and speed of our production so we can roll out our comic in web format first. After finalization we will establish IP of the story to start pushing Angels' Grace brand"
        />
        <TimelineItem
          position="left"
          image={sec_image}
          title="DAO Establishment"
          sec_title="Organization DAO for production and role for supporters"
          text="DAOs are what makes collaboration on projects possible because 
          crypto is inherently financial. We can enable this rewards and accountability to contributors to the project. 
          Verifying your NFT to be apart of an exclusive community is just the beginning."
        />
        <TimelineItem
          position="right"
          image={third_image}
          title="Utility Token Establishment"
          sec_title="Airdrop for Early Believers"
          text="Our supporters should receive rewards for being a supporter be it if you are a minter or a real contributor to the project. 
          They can be brand ambassadors, artists, animators or a writers. If your contributions push this project further you should be compensated as our believer."
        />
        <TimelineItem
          position="left"
          image={forth_image}
          title="Looking forward"
          sec_title="Story Continues"
          text="There are two parts in our project, one is gathering ideas and talents to bring about a very awesome manga. This will continue not matter what, it is our original vision. However, the second part is up to the community to decide. We can move into 3D and explore metaverse as a collectable and partner with existing platforms for games."
        />
      </div>
    </div>
  );
}

export default Timeline;
