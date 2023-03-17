import prisma from '../../services/prisma'
import {CreateProfessorSchema} from './professor.schema'

export async function createProfessor(input: CreateProfessorSchema){
  const { name } = input

    const professor = await prisma.professor.create({
    data:{
      name
    }
  })
}
export async function searchProfessor(){
  const professor = await prisma.professor.findMany()
  return professor
}