import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useWeb3React } from '@web3-react/core';
import MMLogo from '../static/metamask-logo.svg';
import Text from './Text';
import Card from './Card';
import { injected } from '../connectors';
import { shortenAddress } from '../utils/shortenAddress';

const MetamaskLogo = styled.img.attrs({
  src: MMLogo,
})`
  height: 20px;
  padding: 0 16px;
`;

const ConnectBtn = styled(Button).attrs({ variant: 'outline-dark' })``;

const MetamaskConnectButton = () => {
  const { activate, active, account, deactivate } = useWeb3React();
  if (active) {
    return (
      <div>
        {/* <Text uppercase color="green" t3 lineHeight="40px" className="mx-4"> */}
        <span style={{ paddingRight: 16 }}>{shortenAddress(account)}</span>
        {/* </Text> */}
        <ConnectBtn onClick={deactivate}>Log Out</ConnectBtn>
      </div>
    );
  }

  return (
    <div>
      {/* <div> */}
      <MetamaskLogo />
      {/* </div> */}
      <ConnectBtn onClick={() => activate(injected)}>Connect Wallet</ConnectBtn>
    </div>
  );
};

export default MetamaskConnectButton;
