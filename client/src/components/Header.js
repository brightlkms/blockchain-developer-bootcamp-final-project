import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import Logo from "../assets/images/banner/angels.png";
import HeaderImage from "../assets/images/cover.jpg";
import secimage from "../assets/images/banner/angels.png";
import thirdimage from "../assets/images/banner/demons.png";

import Main from "./sections/Mainsection";
import RoadMap from "./sections/Roadmap";
import Team from "./sections/Team";
import Timeline from "./sections/Timeline";
import Footer from "./sections/footer";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const Headerstyle = styled.section``;
const Imgstyle = styled.div`
  background-image: url(${HeaderImage});
  height: 500px;
  display: flex;
  background-size: cover;
`;
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
  padding-top: 15px;

  width: 50%;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
`;
const Discord = styled.div`
  display: flex !important;
  align-items: center;
  padding: 10px 15px;
  width: 200px;
  border-radius: 40px;
  justify-content: space-around;
  display: inline-block;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;
const Roadmap = styled.div`
  display: flex;
  padding-top: 4rem;
  color: black;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LanchRoad = styled.h3`
  padding: 15px 25px;
  margin-bottom: 20px;
  border: 3px solid red;
  width: auto;
  display: inline-block;
`;
const Precentage = styled.span`
  padding: 10px;
  font-size: 18px;
  color: white;
  background: red;
  border: 1px solid red;
`;
const HomepageHeading = ({ mobile }) => (
  <div text>
    <Headerstyle>
      <Imgstyle>
        <div style={{ width: "200px", textAlign: "center", margin: "auto" }}>
          {/* <img style={{ width: "100%" }} src={Logo} /> */}
        </div>
      </Imgstyle>
    </Headerstyle>
  </div>
);

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item position="left">
                  <h1>Angels' Grace</h1>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "4em 0em" }} vertical inverted>
      <TextStyle>
        <div>
          <H1_title>About Us</H1_title>
        </div>
        <P_text style={{ paddingBottom: "80px" }}>
          Angels' Grace is an anime NFT project launching on IMX with 8,888
          supply. Our vision is to create the best anime that was backed by
          NFTs. We are still early in the NFT space and the power is coming back
          to the creators. Why is it that a multi billion dollars industry like
          anime are failing to payout the true talent behind the success? With
          the help of DAO and tokenization we believe that we can change all of
          this to truly help the great creators of our time.
        </P_text>
      </TextStyle>
      <Main
        title="THE STORY"
        text="Angels' Grace is set in a world where humans and gods lived separately for centuries until one day, a 
        Demon God Kaito wanted to resurrect a Demon God of destruction, Hasu on Earth.
        He sent thousands of demons through the gates within the angel capital to collect souls on Earth for resurrecting Hasu. 
        Angels love the humans but could not reopen the gates, so they can only sacrifice their lives to give blessings for the humans to fight for their lives."
        image={secimage}
      />
      <img
        alt="angelBanner"
        style={{ width: "100%", margin: "-10px" }}
        src={thirdimage}
      />
      <RoadMap />
      <Timeline />

      <Team />
    </Segment>
    {/* <Footer /> */}
  </ResponsiveContainer>
);

export default HomepageLayout;
