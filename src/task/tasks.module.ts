import { Module } from '@nestjs/common'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'
import { PrismaService } from 'src/prisma.service'

@Module({
    controllers: [TaskController],
    imports: [],
    providers: [TaskService, PrismaService]
})

export class TaskModule {


}





