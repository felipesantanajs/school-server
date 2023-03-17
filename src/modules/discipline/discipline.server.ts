import prisma from '../../services/prisma'
import {CreateDisciplineSchema} from './discipline.schema'

export async function createDiscipline(input: CreateDisciplineSchema){
  const { name,classId,professorId } = input

    const discipline = await prisma.discipline.create({
    data:{
      name,
      classId,
      professorId
    }
  })
}
export async function searchDiscipline(){
  const discipline = await prisma.discipline.findMany()
  return discipline
}