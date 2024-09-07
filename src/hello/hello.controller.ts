import { Controller, Get, HttpCode, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('hello')
export class HelloController {


    @Post('/')
    hello(@Req() req: Request, @Res() res: Response) {
        const { name } = req.body
        return res.status(200).json({
            message: `hello world this is me! ${name}`,
        })
    }

    @Get('/hola/:id')
    helloGet(@Param('id') id: string) {
        console.log(typeof id)
        return 'Hola  ' + id;
    }


    @Get('/greet')
    @ApiOperation({ summary: 'this gets the name and age' })
    @ApiResponse({ status: 200, description: 'Return well' })
    @ApiResponse({ status: 403, description: 'forbidden' })
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        console.log(typeof query.name)
        console.log(typeof query.age)
        return `Hello ${query.name}! You are ${query.age} years old.`
    }

    @HttpCode(404)
    @Get('/not-found')
    notFound() {
        return 'Not Found page '
    }


    @Get('/error')
    @HttpCode(500)
    errorPage() {
        return 'Not Found page '
    }
}
