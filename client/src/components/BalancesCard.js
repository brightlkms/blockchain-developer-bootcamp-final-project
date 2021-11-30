import React, { useEffect } from 'react';
import Text from './Text';
import Card from './Card';
import { colors } from '../theme';
import { useWeb3React } from '@web3-react/core';
import useEth from '../hooks/useEth';
import { useBlessing } from '../hooks/useYield';
import { useAngels } from '../hooks/useAngels';
import { useAppContext } from '../AppContext';

const BalanceCard = () => {
  const { account } = useWeb3React();
  const { fetchEthBalance, ethBalance } = useEth();
  const { fetchBlessingBalance, blessBalance, fetchClaimable, claimableBalance } = useBlessing();
  const { claimRewards } = useAngels();
  const handleClaimRewards = () => claimRewards();
  useEffect(() => {
    if (account) {
      fetchEthBalance();
      fetchBlessingBalance();
      fetchClaimable();
    }
  }, [account]);

  return (
    // <Card style={{ maxWidth: 300 }}>
    //   <Text style={{ display: 'inline-block' }} block color={colors.green}>
    //     ETH balance: {ethBalance}
    //   </Text>
    //   <Text style={{ display: 'inline-block' }} block color={colors.green}>
    //     BLESS balance: {blessBalance}
    //   </Text>
    //   <Text style={{ display: 'inline-block' }} block color={colors.green}>
    //     Claimable: {claimableBalance}
    //   </Text>
    // </Card>
    <div>
      <div style={{ display: 'inline-block', padding: '0 8px' }}>ETH: {ethBalance}</div>
      <div style={{ display: 'inline-block', padding: '0 8px' }}>BLESS: {blessBalance}</div>
      <div style={{ display: 'inline-block', padding: '0 8px' }}>Claimable: {claimableBalance}</div>
      <div
        style={{
          display: 'inline-block',
          padding: '0 16px',
          cursor: 'pointer',
          border: '1px solid black',
          borderRadius: '25px',
        }}
        onClick={handleClaimRewards}
      >
        Claim Blessing
      </div>
    </div>
  );
};

export default BalanceCard;
