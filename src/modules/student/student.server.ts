import prisma from "../../services/prisma";
import { CreateStudentSchema } from "./student.schema";

export async function createStudent(input: CreateStudentSchema){
 
  const { name, classId } = input  
  
  const student = await prisma.student.create({
    data: {
      name,
      classId
    }
  })
}