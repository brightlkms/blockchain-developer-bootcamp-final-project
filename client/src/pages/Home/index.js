import React from 'react';
import { Container } from 'react-bootstrap';
import CompInteractionCard from './CompInteractionCard';
import ConnectWalletModal from '../../components/ConnectWalletModal';
import useWalletConnectionModal from '../../hooks/useWalletConnectionModal';
import HomeBanner from './HomeBanner';
import About from './About';
import Story from './Story';
import Banner from './Banner';
import angelBanner from '../../assets/images/banner/angels.png';
import demonBanner from '../../assets/images/banner/demons.png';
import Team from './Team';
import Milestone from './Milestone';
import Roadmap from './Roadmap';
const Home = () => {
  const { isWalletConnectModalOpen } = useWalletConnectionModal();
  return (
    <div>
      {isWalletConnectModalOpen && <ConnectWalletModal />}
      {/* <CompInteractionCard /> */}
      <HomeBanner />
      <About />
      <Banner source={angelBanner} />
      <Story />
      <Banner source={demonBanner} />

      <Roadmap />
      <Milestone />
      <Team />
    </div>
  );
};

export default Home;
