import prisma from "../../services/prisma";
import { CreateStudentSchema,SearchStudentSchema } from "./student.schema";

export async function createStudent(input: CreateStudentSchema){
 
  const { name, classId } = input  
  
  const student = await prisma.student.create({
    data: {
      name,
      classId
    }
  })
}

export async function searchStudent(input: SearchStudentSchema){

  const {id} = input

  const student = await prisma.student.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      class: {
        include: {
          disciplines: {
            include: {
              professor: true,
            },
          },
        },
      },
    },
  });

  return student
}

export async function removeStudent(input: SearchStudentSchema){

  const {id} = input

  await prisma.student.delete({
    where: {
      id: Number(id),
    },
  });
}