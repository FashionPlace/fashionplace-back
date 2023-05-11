import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompradorEntity } from 'src/comprador/comprador.entity/comprador.entity';
import { BusinessError, BusinessLogicException } from 'src/shared/errors/business-errors';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(CompradorEntity)
        private readonly compradorRepository: Repository<CompradorEntity>,
    ) {}

    async findByEmailContrasenia(email: string, contrasenia: string): Promise<CompradorEntity> {
        const comprador: CompradorEntity = await this.compradorRepository.findOne({where: {email: email, contrasenia: contrasenia}});
        
        if (!comprador)
          throw new BusinessLogicException("Email o contrasenia incorrectos.", BusinessError.PRECONDITION_FAILED)
   
        return comprador;
    }
}
