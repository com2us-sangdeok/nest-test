import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('/all')
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Get('/test')
  test(): Promise<Photo[]> {
    return this.photoService.test();
  }
}
