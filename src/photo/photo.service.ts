import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { BlockchainClient, CustomUtil } from "@blockchain/chain-bridge";

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
    @Inject('BLOCKCHAIN_CLIENT')
    private bc: BlockchainClient,
  ) {}


  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async test(): Promise<any> {
    const user1 =
      'test test test high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn';
    return this.bc.client.createAccount(user1);

    // const util = new CustomUtil
    // return util.randomString();
  }
}
