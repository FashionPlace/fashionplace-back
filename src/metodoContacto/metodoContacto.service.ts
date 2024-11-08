import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoContactoEntity } from './metodoContacto.entity/metodoContacto.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { EmpresaEntity } from 'src/empresa/empresa.entity/empresa.entity';

@Injectable()
export class MetodoContactoService {

    constructor(
        @InjectRepository(MetodoContactoEntity)
        private readonly metodoContactoRepository: Repository<MetodoContactoEntity>,
        @InjectRepository(EmpresaEntity)
        private readonly empresaRepository: Repository<EmpresaEntity>
    ){}

    async findAll(): Promise<MetodoContactoEntity[]> {
        return await this.metodoContactoRepository.find({ relations: ["empresa"] });
    }

    async findOne(id: string): Promise<MetodoContactoEntity> {
        const metodoContacto: MetodoContactoEntity = await this.metodoContactoRepository.findOne({where: {id}, relations: ["empresa"] } );
        if (!metodoContacto)
          throw new BusinessLogicException("The metodoContacto with the given id was not found", BusinessError.NOT_FOUND);
        return metodoContacto;
    }

    async create(metodoContacto: MetodoContactoEntity): Promise<MetodoContactoEntity> {
        const empresa: EmpresaEntity = await this.empresaRepository.findOne({where: {id: metodoContacto.empresa.id}});
        if(!empresa)
            throw new BusinessLogicException("La empresa vinculada a la sucursal debe existir", BusinessError.PRECONDITION_FAILED);

        return await this.metodoContactoRepository.save(metodoContacto);
    }

    async update(id: string, metodoContacto: MetodoContactoEntity): Promise<MetodoContactoEntity> {
        const persistedMetodoContacto: MetodoContactoEntity = await this.metodoContactoRepository.findOne({where:{id}});
        if (!persistedMetodoContacto)
          throw new BusinessLogicException("The metodoContacto with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.metodoContactoRepository.save({...persistedMetodoContacto, ...metodoContacto});
    }

    async delete(id: string) {
        const metodoContacto: MetodoContactoEntity = await this.metodoContactoRepository.findOne({where:{id}});
        if (!metodoContacto)
          throw new BusinessLogicException("The metodoContacto with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.metodoContactoRepository.remove(metodoContacto);
    }

}
