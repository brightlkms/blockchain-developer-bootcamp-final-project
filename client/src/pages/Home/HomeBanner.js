import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import BalanceInput from '../../components/BalanceInput';
import Card from '../../components/Card';
import Button from 'react-bootstrap/Button';
import { colors } from '../../theme';
import { ArrowDown } from 'react-bootstrap-icons';
import { useAngels } from '../../hooks/useAngels';
import { useAppContext } from '../../AppContext';
import Spinner from 'react-bootstrap/Spinner';
import useEth from '../../hooks/useEth';
import useTransaction from '../../hooks/useTransaction';
import homeBannerImage from '../../assets/images/homebanner.png';
import logoImage from '../../assets/images/logo.png';
import mintImage from '../../assets/images/mint.png';
import { useWeb3React } from '@web3-react/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  overflow: hidden auto;
  z-index: 1;
`;
const HomeBannerImage = styled.div`
  background-image: url(${homeBannerImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const HomeBanner = () => {
  const { mint } = useAngels();
  const { ethBalance } = useEth();
  const { txnStatus, setTxnStatus } = useTransaction();
  const handleMint = () => mint('0.04');
  const { account, activate, active } = useWeb3React();
  useEffect(() => {
    console.log('home banner account', account, activate, active);
  }, [active]);

  if (txnStatus === 'LOADING') {
    return (
      <Container show>
        <Card style={{ maxWidth: 420, minHeight: 400 }}>
          <Spinner animation="border" role="status" className="m-auto" />
        </Card>
      </Container>
    );
  }

  if (txnStatus === 'COMPLETE') {
    return (
      <Container show>
        <Card style={{ maxWidth: 420, minHeight: 400 }}>
          <Text block center className="mb-5">
            Txn Was successful!
          </Text>
          <Button onClick={() => setTxnStatus('NOT_SUBMITTED')}>Go Back</Button>
        </Card>
      </Container>
    );
  }

  if (txnStatus === 'ERROR') {
    return (
      <Container show>
        <Card style={{ maxWidth: 420, minHeight: 400 }}>
          <Text>Txn ERROR</Text>
          <Button onClick={() => setTxnStatus('NOT_SUBMITTED')}>Go Back</Button>
        </Card>
      </Container>
    );
  }
  return (
    <div>
      <HomeBannerImage>
        <img src={logoImage} height={250} width={180} style={{ position: 'relative', top: '28%', left: '8%' }} />
        <img
          src={mintImage}
          height={50}
          width={200}
          onClick={handleMint}
          style={{ cursor: 'pointer', position: 'relative', top: '30%', left: '7%', display: 'block' }}
        />
      </HomeBannerImage>
    </div>
  );
};

export default HomeBanner;
