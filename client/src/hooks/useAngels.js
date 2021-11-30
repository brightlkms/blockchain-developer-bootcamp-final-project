import { useContract } from './useContract';
import ANGEL_ABI from '../static/AngelsABI';
import useIsValidNetwork from '../hooks/useIsValidNetwork';
import { useWeb3React } from '@web3-react/core';
import { useAppContext } from '../AppContext';
import { parseEther } from '@ethersproject/units';
import contractAddresses from '../utils/contractAddresses';
export const useAngels = () => {
  const { account } = useWeb3React();
  const { isValidNetwork } = useIsValidNetwork();
  const angelAddress = contractAddresses.aGrace; // ropsten
  const angelContract = useContract(angelAddress, ANGEL_ABI);
  const { setTxnStatus } = useAppContext();

  const mint = async (amount) => {
    if (account && isValidNetwork) {
      try {
        setTxnStatus('LOADING');
        const txn = await angelContract.mint(account, {
          from: account,
          value: parseEther(amount),
        });
        await txn.wait(1);
        setTxnStatus('COMPLETE');
      } catch (error) {
        setTxnStatus('ERROR');
      }
    }
  };

  const claimRewards = async () => {
    if (account && isValidNetwork) {
      try {
        setTxnStatus('LOADING');
        const txn = await angelContract.getReward();
        await txn.wait(1);
        setTxnStatus('COMPLETE');
      } catch (error) {
        console.log(error);
        setTxnStatus('ERROR');
      }
    }
  };

  return {
    mint,
    claimRewards,
  };
};
