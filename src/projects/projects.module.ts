import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
  imports: []
})
export class ProjectsModule { }
