import { FastifyReply, FastifyRequest } from "fastify";
import { createStudent, removeStudent, searchStudent } from "./student.server";
import { CreateStudentSchema,SearchStudentSchema } from "./student.schema";

export async function registerStudentHendler(
  request: FastifyRequest<{ Body: CreateStudentSchema}>, 
  reply: FastifyReply
  ){

  const body = request.body

  try{
    const student = await createStudent(body)
    return reply.status(201).send()
    
  }catch(err){
    console.log(err)
    return reply.status(500).send(err)
  }
} 

export async function findStudentHandler(request:FastifyRequest<{Params:SearchStudentSchema}>, reply:FastifyReply){
  const params = request.params;
 
  try{
    const student = await searchStudent(params)
    return reply.status(200).send(student)

  }catch(err){
    console.log(err)
  }
}

export async function removeStudentHandler(request:FastifyRequest<{Params:SearchStudentSchema}>, reply:FastifyReply){
  const id = request.params;
 
  try{
    const student = await removeStudent(id)
    reply.send({ message: 'Aluno removido com sucesso!' });

  }catch(err){
    console.log(err)
  }
}

