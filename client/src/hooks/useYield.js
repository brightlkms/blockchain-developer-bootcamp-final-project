import { useContract } from './useContract';
import YIELD_ABI from '../static/YieldABI.js';
import useIsValidNetwork from '../hooks/useIsValidNetwork';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { formatUnits, parseEther, formatEther } from '@ethersproject/units';
import { useEffect } from 'react';
import contractAddresses from '../utils/contractAddresses';

export const useBlessing = () => {
  const { account } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();
  const blessAddress = contractAddresses.blessToken; // ropsten
  const blessContract = useContract(blessAddress, YIELD_ABI);
  const { setBlessBalance, setTxnStatus, blessBalance, setClaimableBlessing, claimableBalance } = useAppContext();

  const fetchBlessingBalance = async () => {
    const blessingBalance = await blessContract.balanceOf(account);
    let res = formatEther(blessingBalance);
    res = Math.round(res * 1e4) / 1e4;
    setBlessBalance(res);
  };

  const fetchClaimable = async () => {
    const claimableBalance = await blessContract.getTotalClaimable(account);
    let res = formatEther(claimableBalance);
    res = Math.round(res * 1e4) / 1e4;
    setClaimableBlessing(res);
  };

  return {
    blessBalance,
    claimableBalance,
    fetchBlessingBalance,
    fetchClaimable,
  };
};
