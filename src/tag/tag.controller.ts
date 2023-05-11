import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { TagService } from './tag.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { TagEntity } from './tag.entity/tag.entity';
import { TagDto } from './tag.dto/tag.dto';
import { plainToInstance } from 'class-transformer';

@Controller('tags')
@UseInterceptors(BusinessErrorsInterceptor)
export class TagController {

    constructor(private readonly tagService: TagService) {}

    @Get()
    async findAll() {
        return await this.tagService.findAll();
    }

    @Get(':tagId')
    async findOne(@Param('tagId') tagId: string) {
        return await this.tagService.findOne(tagId);
    }

    @Post()
    async create(@Body() tagsDto: TagDto) {
        const tag: TagEntity = plainToInstance(TagEntity, tagsDto);
        return await this.tagService.create(tag);
    }

    @Put(':tagId')
    async update(@Param('tagId') tagId: string, @Body() tagsDto: TagDto) {
        const tag: TagEntity = plainToInstance(TagEntity, tagsDto);
        return await this.tagService.update(tagId, tag);
    }

    @Delete(':tagId')
    @HttpCode(204)
    async delete(@Param('tagId') tagId: string) {
        return await this.tagService.delete(tagId);
    }    
}
