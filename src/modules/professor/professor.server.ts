import prisma from '../../services/prisma'
import {CreateProfessorSchema, SearchProfessorSchema} from './professor.schema'

export async function createProfessor(input: CreateProfessorSchema){
  const { name } = input

  const professor = await prisma.professor.create({
    data:{
      name
    }
  })
}
export async function searchProfessor(input: SearchProfessorSchema){

  const {id} = input
  const professor = await prisma.professor.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      disciplines: true,
    },
  });
  return professor
}

export async function removeProfessor(input: SearchProfessorSchema){

  const {id} = input

  await prisma.professor.delete({
    where: {
      id: Number(id),
    },
  });
}