import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComentarioEntity } from './comentario.entity/comentario.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';
import { ProductoEntity } from 'src/producto/producto.entity/producto.entity';

@Injectable()
export class ComentarioService {

    constructor(
        @InjectRepository(ComentarioEntity)
        private readonly comentarioRepository: Repository<ComentarioEntity>,
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>,
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>
    ){}

    async findAll(): Promise<ComentarioEntity[]> {
        return await this.comentarioRepository.find({ relations: ["producto", "comprador"] });
    }

    async findOne(id: string): Promise<ComentarioEntity> {
        const comentario: ComentarioEntity = await this.comentarioRepository.findOne({where: {id}, relations: ["producto", "comprador"] } );
        if (!comentario)
          throw new BusinessLogicException("The comentario with the given id was not found", BusinessError.NOT_FOUND);
        return comentario;
    }

    async create(comentario: ComentarioEntity): Promise<ComentarioEntity> {

        const comprador: CompradorEntity = await this.compradorRepository.findOne({where: {id: comentario.comprador.id}} );
        if (!comprador)
            throw new BusinessLogicException("The comprador with the given id was not found", BusinessError.NOT_FOUND);

        const producto: ProductoEntity = await this.productoRepository.findOne({where: {id: comentario.producto.id}} );
        if (!producto)
            throw new BusinessLogicException("The producto with the given id was not found", BusinessError.NOT_FOUND);

        return await this.comentarioRepository.save(comentario);
    }

    async update(id: string, comentario: ComentarioEntity): Promise<ComentarioEntity> {
        const persistedComentario: ComentarioEntity = await this.comentarioRepository.findOne({where:{id}});
        if (!persistedComentario)
          throw new BusinessLogicException("The comentario with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.comentarioRepository.save({...persistedComentario, ...comentario});
    }

    async delete(id: string) {
        const comentario: ComentarioEntity = await this.comentarioRepository.findOne({where:{id}});
        if (!comentario)
          throw new BusinessLogicException("The comentario with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.comentarioRepository.remove(comentario);
    }

}
