import { Injectable } from '@nestjs/common';

export interface Aluno {
  id: string;
  name: string;
  surname: string;
}

@Injectable()
export class AppService {

private alunos: Aluno[] = [
  {id:'1', name: 'Matheus', surname:'Pimentel'},
  {id:'2', name: 'Italo', surname:'Costa'},
  {id:'3', name: 'Julia', surname:'Mizuguchi'},
  {id:'4', name: 'Emanuel', surname:'Nascimento'},  
]

  getHello(): string {
    return 'Hello World! AAAAAAAAAAAAAAAA';
  }

  getAlunos(): Aluno[] {
    return this.alunos
  }

  getAlunoById(id: string): Aluno | undefined{
    return this.alunos.find(aluno => aluno.id === id)
  }

}
