import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity/tag.entity';

@Module({
  providers: [TagService],
  controllers: [TagController],
  imports: [TypeOrmModule.forFeature([TagEntity])],
})
export class TagModule {}
