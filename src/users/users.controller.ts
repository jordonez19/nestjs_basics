import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {

    constructor(private userService: UsersService) { }

    @ApiTags('users')
    @Get('/users')
    getUsers() {
        return this.userService.getUser();
    }

}
