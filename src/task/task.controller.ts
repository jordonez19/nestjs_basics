import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
export class TaskController {

    constructor(private taskService: TaskService) { }
    @ApiTags('projects')
    @Get()
    getTasks() {
        return this.taskService.getTasks();
    }

   /*  @Get('/:id')
    getTask(@Param('id') id: string) {
        return this.taskService.getTask(Number(id));
    }

    @Post()
    postTasks(@Body() task: CreateTaskDto) {
        return this.taskService.postTask(task);
    }
 */
}


