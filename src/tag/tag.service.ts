import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity/tag.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';

@Injectable()
export class TagService {

    constructor(
        @InjectRepository(TagEntity)
        private readonly tagRepository: Repository<TagEntity>
    ){}

    async findAll(): Promise<TagEntity[]> {
        return await this.tagRepository.find({ relations: ["caracteristicas"] });
    }

    async findOne(id: string): Promise<TagEntity> {
        const tag: TagEntity = await this.tagRepository.findOne({where: {id}, relations: ["caracteristicas"] } );
        if (!tag)
          throw new BusinessLogicException("The tag with the given id was not found", BusinessError.NOT_FOUND);
        return tag;
    }

    async create(tag: TagEntity): Promise<TagEntity> {
        return await this.tagRepository.save(tag);
    }

    async update(id: string, tag: TagEntity): Promise<TagEntity> {
        const persistedTag: TagEntity = await this.tagRepository.findOne({where:{id}});
        if (!persistedTag)
          throw new BusinessLogicException("The tag with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.tagRepository.save({...persistedTag, ...tag});
    }

    async delete(id: string) {
        const tag: TagEntity = await this.tagRepository.findOne({where:{id}});
        if (!tag)
          throw new BusinessLogicException("The tag with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.tagRepository.remove(tag);
    }

}
