import { log } from '../../services/logger'
import prisma from '../../services/prisma'
import {CreateGroupSchema} from './group.schema'

export async function createGroup(input: CreateGroupSchema){
  const { name } = input

    const group = await prisma.class.create({
    data:{
      name
    }
  })
}
export async function createCompleteGroup(input: CreateGroupSchema){
  const { name, studentsArray, disciplinesArray} = input

  const group = await prisma.class.create({
    data: {
      name,
      students: {
        create : studentsArray
      },
      disciplines: {
        create: disciplinesArray
      },
    },
    include: {
      disciplines: true,
      students: true,
    },
  });

  const existingDiscipline = group.disciplines.map((d) => d.name);
  const newDiscipline = disciplinesArray.filter((d:any) => !existingDiscipline.includes(d.name));
  
  
  console.log("existingDiscipline", existingDiscipline)

  //console.log("new", newDiscipline.length, )
  if (newDiscipline.length > 1) {
    
    group.students.forEach((student) => {
      log(`Nova(s) disciplina(s) adicionada(s) à turma ${group.name}: ${newDiscipline.join(', ')}. Notificando aluno ${student.name}.`);
    });

  }

  return group
}
export async function searchGroup(){
  const group = await prisma.class.findMany()
  return group
}