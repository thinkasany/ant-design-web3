import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectButton, Connector } from '@ant-design/web3';
import { CoinbaseWallet, PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

interface Props {
  mode: ConnectModalProps['mode'];
  size: SizeType;
  quickConnect: boolean;
}

const App: React.FC<Props> = ({ mode, size, quickConnect }) => {
  return (
    <SolanaWeb3ConfigProvider wallets={[CoinbaseWallet(), PhantomWallet()]}>
      <Connector
        modalProps={{
          mode,
        }}
      >
        <ConnectButton
          type="primary"
          style={{
            width: 'auto',
          }}
          size={size}
          quickConnect={quickConnect}
        />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;