import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService){}

    async getAllProjects(){
        return await this.prisma.project.findMany();
    }
    
}
