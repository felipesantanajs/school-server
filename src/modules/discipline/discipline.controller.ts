import {FastifyReply, FastifyRequest } from "fastify";
import { createDiscipline, searchDiscipline } from "./discipline.server";
import { CreateDisciplineSchema } from "./discipline.schema";

export async function registerDisciplineHandler(
  request: FastifyRequest<{ Body: CreateDisciplineSchema}>, 
  reply: FastifyReply){
  
  const body = request.body
  try{
    const discipline = await createDiscipline(body)
    return reply.status(201).send()
  }catch(err){
    console.log(err)
    reply.status(500).send(err)
  }
}

export async function searchDisciplineHandler(
  request: FastifyRequest, 
  reply: FastifyReply){

    try{
      const getDiscipline = await searchDiscipline()

      return reply.status(200).send(getDiscipline)
    }catch(err){
      console.log(err)
      return reply.status(500).send(err)
    }
}