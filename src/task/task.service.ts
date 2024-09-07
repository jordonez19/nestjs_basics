import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  // Obtener todas las tareas
  async getTasks() {
    return this.prisma.task.findMany();
  }
/* 
  // Obtener una tarea por ID
  async getTask(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  // Crear una nueva tarea
  async createTask(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  } */
}
