import {FastifyReply, FastifyRequest } from "fastify";
import { createCompleteGroup, createGroup, searchGroup } from "./group.server";
import { CreateGroupSchema } from "./group.schema";

export async function registerGroupHandler(
  request: FastifyRequest<{ Body: CreateGroupSchema}>, 
  reply: FastifyReply){
  
  const body = request.body
  try{
    const group = await createGroup(body)
    return reply.status(201).send()
  }catch(err){
    console.log(err)
    reply.status(500).send(err)
  }
}
export async function registerGroupCompleteHandler(
  request: FastifyRequest<{ Body: CreateGroupSchema}>, 
  reply: FastifyReply){
  
  const body = request.body

  try{
    const group = await createCompleteGroup(body)
    return reply.status(201).send(group)
   
  }catch(err){
    console.log(err)
    reply.status(500).send(err)
  }
}
export async function searchGroupHandler(
  request: FastifyRequest, 
  reply: FastifyReply){

    try{
      const getGroup = await searchGroup()

      return reply.status(200).send(getGroup)
    }catch(err){
      console.log(err)
      return reply.status(500).send(err)
    }
}