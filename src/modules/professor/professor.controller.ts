import {FastifyReply, FastifyRequest } from "fastify";
import { createProfessor, removeProfessor, searchProfessor } from "./professor.server";
import { CreateProfessorSchema,SearchProfessorSchema } from "./professor.schema";

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

export async function searchProfessorHandler(request: FastifyRequest<{Params:SearchProfessorSchema}>, reply: FastifyReply){

    const id = request.params

    try{
      const getProfessor = await searchProfessor(id)
      return reply.status(200).send(getProfessor)
    }catch(err){
      console.log(err)
      return reply.status(500).send(err)
    }
}

export async function removeProfessorHandler(request: FastifyRequest<{Params:SearchProfessorSchema}>, reply: FastifyReply){

  const id = request.params
  
  try{
    const professor = await removeProfessor(id)
    reply.send({ message: 'Professor removido com sucesso!' });
  }catch(err){
    console.log(err)
    return reply.status(500).send(err)
  }
}