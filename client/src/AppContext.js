import React, { createContext, useReducer } from 'react';

const initialContext = {
  ethBalance: '--',
  setEthBalance: () => {},
  blessBalance: '--',
  setBlessBalance: () => {},
  claimableBalance: '--',
  setClaimableBlessing: () => {},
  exchangeRate: 0,
  setClaimableBlessing: () => {},
  isWalletConnectionModalOpen: false,
  setWalletConnectModal: () => {},
  txnStatus: 'NOT_SUBMITTED',
  setTxnStatus: () => {},
};

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ETH_BALANCE':
      return {
        ...state,
        ethBalance: payload,
      };

    case 'SET_BLESS_BALANCE':
      return {
        ...state,
        blessBalance: payload,
      };

    case 'SET_CLAIMABLE_BLESS':
      return {
        ...state,
        claimableBalance: payload,
      };

    case 'SET_WALLET_MODAL':
      return {
        ...state,
        isWalletConnectModalOpen: payload,
      };

    case 'SET_TXN_STATUS':
      return {
        ...state,
        txnStatus: payload,
      };
    default:
      return state;
  }
};

const AppContext = createContext(initialContext);
export const useAppContext = () => React.useContext(AppContext);
export const AppContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialContext);

  const contextValue = {
    ethBalance: store.ethBalance,
    setEthBalance: (balance) => {
      dispatch({ type: 'SET_ETH_BALANCE', payload: balance });
    },
    blessBalance: store.blessBalance,
    setBlessBalance: (balance) => {
      dispatch({ type: 'SET_BLESS_BALANCE', payload: balance });
    },
    claimableBalance: store.claimableBalance,
    setClaimableBlessing: (claimable) => {
      dispatch({ type: 'SET_CLAIMABLE_BLESS', payload: claimable });
    },
    isWalletConnectModalOpen: store.isWalletConnectModalOpen,
    setWalletConnectModal: (open) => {
      dispatch({ type: 'SET_WALLET_MODAL', payload: open });
    },
    txnStatus: store.txnStatus,
    setTxnStatus: (status) => {
      dispatch({ type: 'SET_TXN_STATUS', payload: status });
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
