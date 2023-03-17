import {FastifyReply, FastifyRequest } from "fastify";
import { createProfessor, searchProfessor } from "./professor.server";
import { CreateProfessorSchema } from "./professor.schema";

export async function registerProfessorHandler(
  request: FastifyRequest<{ Body: CreateProfessorSchema}>, 
  reply: FastifyReply){
  
  const body = request.body
  try{
    const professor = await createProfessor(body)
    return reply.status(201).send()
  }catch(err){
    console.log(err)
    reply.status(500).send(err)
  }
}

export async function searchProfessorHandler(request: FastifyRequest, reply: FastifyReply){

    try{
      const getProfessor = await searchProfessor()

      return reply.status(200).send(getProfessor)
    }catch(err){
      console.log(err)
      return reply.status(500).send(err)
    }
}