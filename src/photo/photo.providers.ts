import { DataSource } from 'typeorm';
import { Photo } from './photo.entity';
import {
  BlockchainClient,
} from '@blockchain/chain-bridge';

export const photoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'BLOCKCHAIN_CLIENT',
    useFactory: (blockchainClient: BlockchainClient) => blockchainClient,
    inject: ['CHAIN_SOURCE'],
  },
];
