import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {

    constructor(private projectService: ProjectsService) { }

    @Get('projects')
    getAllProjects() {
        return this.projectService.getAllProjects();
    }
}
