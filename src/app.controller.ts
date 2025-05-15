import { Controller, Get, Param } from '@nestjs/common';
import { AppService, Aluno } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test/aula')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/aula/alunos')
  getAlunos(): Aluno[] {
    return this.appService.getAlunos();
  }

  @Get('/aula/alunos')
  getAlunoId(): Aluno[] {
    return this.appService.getAlunos();
  }

  @Get('/aula/alunos/:id')
  getAlunoById(@Param('id') id: string): Aluno | undefined {
  return this.appService.getAlunoById(id);
}
}
