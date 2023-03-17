import { FastifyInstance } from "fastify";
import {  registerProfessorHandler, removeProfessorHandler, searchProfessorHandler } from "./professor.controller";

export default async function professorRoutes(server:FastifyInstance){
  server.post('/create', registerProfessorHandler)
  server.get('/:id', searchProfessorHandler)
  server.post('/remove/:id', removeProfessorHandler)
}

