import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors.interceptor';
import { LoginService } from './login.service';

@Controller('login/:email/:contrasenia')
@UseInterceptors(BusinessErrorsInterceptor)
export class LoginController {

    constructor(private readonly loginService: LoginService){}
    
    @Get()
    async login(@Param('email') email: string, @Param('contrasenia') contrasenia: string) {
        return await this.loginService.findByEmailContrasenia(email, contrasenia);
    }
}