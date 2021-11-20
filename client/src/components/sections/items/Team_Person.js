import React from "react";
import { Grid, Header } from "semantic-ui-react";
function Team_Person({ title, text, image }) {
  return (
    <Grid.Column
      style={{
        paddingBottom: "5em",
        paddingLeft: "5em",
        paddingTop: "5em",
        textAlign: "left",
      }}
    >
      <img className="team_person_image" src={image} />
      <Header as="h3" style={{ width: "80%", fontSize: "2em", color: "red" }}>
        {title}
      </Header>
      <p style={{ width: "80%", fontSize: "1.33em" }}>{text}</p>
    </Grid.Column>
  );
}

export default Team_Person;
