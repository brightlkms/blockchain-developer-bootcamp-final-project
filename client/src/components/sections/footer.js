import React from "react";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import Logo from "../../assets/images/logo512.png";

function Footer() {
  return (
    <div className="mt-5 footer">
      <Grid columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingLeft: "5em",
              paddingTop: "5em",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.33em" }}>
              <img style={{ width: "50%" }} src={Logo} />
            </div>
          </Grid.Column>

          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingLeft: "5em",
              paddingTop: "5em",
              textAlign: "center",
            }}
          >
            <Header as="h3" style={{ fontSize: "2em", color: "red" }}>
              MENU
            </Header>
            <div style={{ fontSize: "1.33em" }}>
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>ROAD MAP</li>
                <li>TEAM</li>
              </ul>
            </div>
          </Grid.Column>

          <Grid.Column
            style={{
              paddingBottom: "5em",
              paddingLeft: "5em",
              paddingTop: "5em",
              textAlign: "center",
            }}
          >
            <Header as="h3" style={{ fontSize: "2em", color: "red" }}>
              SOCIAL
            </Header>
            <div style={{ fontSize: "1.33em" }}>
              <ul>
                <li>TWITTER</li>
                <li> DISCORD</li>
                <li>OPENSEA</li>
              </ul>
            </div>
          </Grid.Column>
        </Grid.Row>
        <h1 style={{ width: "100%", paddingBottom: "50px" }}>
          lorem Lorem Ipsum is simply dummy text of the printing and
        </h1>
      </Grid>
    </div>
  );
}

export default Footer;
