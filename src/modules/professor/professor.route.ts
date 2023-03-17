import { FastifyInstance } from "fastify";
import {  registerProfessorHandler, searchProfessorHandler } from "./professor.controller";

export default async function professorRoutes(server:FastifyInstance){
  server.post('/create', registerProfessorHandler)
  server.get('/search', searchProfessorHandler)
}

