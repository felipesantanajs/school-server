import { FastifyInstance } from "fastify";
import { registerDisciplineHandler, searchDisciplineHandler } from "./discipline.controller";

export default async function disciplineRoutes(server:FastifyInstance){
  server.post('/create', registerDisciplineHandler)
  server.get('/search', searchDisciplineHandler)
}

