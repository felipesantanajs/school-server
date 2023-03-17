import { FastifyReply, FastifyRequest } from "fastify";
import { createStudent } from "./student.server";
import { CreateStudentSchema } from "./student.schema";

export default async function registerStudentHendler(
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