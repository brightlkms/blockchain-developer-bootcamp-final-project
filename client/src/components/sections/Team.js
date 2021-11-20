import React from "react";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import person1 from "../../assets/images/team/1.jpg";
import person2 from "../../assets/images/team/11.jpg";
import person3 from "../../assets/images/team/10.jpg";
import Team_Person from "./items/Team_Person";

const TextStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const H1_title = styled.h2`
  border-bottom: 2px solid red;
  padding-bottom: 15px;
`;
const P_text = styled.div`
  padding-bottom: 15px;
  width: 50%;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
`;
function Team() {
  return (
    <div className="mt-5">
      <TextStyle>
        <div>
          <H1_title>THE TEAM</H1_title>
        </div>
      </TextStyle>
      <Grid columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Team_Person
            image={person1}
            title="Founder/Development"
            text="Handles web development, rarity, art generation, smart contract development and integration with IMX. Will take lead in story development."
          />
          <Team_Person
            image={person2}
            title="Lead Artist/Writer"
            text="UI/UX designer, drawer, and writer. She is behind the development of these beautiful characters and will take major role in story development."
          />
          <Team_Person
            image={person3}
            title="Head of Community"
            text="Drive reach and engagement to our awesome project. Make sure people know about what is being brought to this space."
          />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Team;
