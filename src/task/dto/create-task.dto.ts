import { IsNotEmpty, IsString, MinLength } from "class-validator";



export class CreateTaskDto {
 
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    name: string;
    
} 