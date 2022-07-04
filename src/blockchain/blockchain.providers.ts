import {
  BlockchainClient,
  BlockchainClientOptions,
} from '@blockchain/chain-bridge';

export const blockchainProviders = [
  {
    provide: 'CHAIN_SOURCE',
    useFactory: async () => {
      const options: BlockchainClientOptions = {
        type: 'terra',
        nodeURL: 'http://localhost:1317',
        chainID: 'localterra',
        isClassic: true,
      };

      return new BlockchainClient(options);
    },
  },
];
