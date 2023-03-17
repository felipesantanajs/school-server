import { FastifyInstance } from "fastify";
import { registerGroupHandler, searchGroupHandler } from "./group.controller";

export default async function groupRoutes(server:FastifyInstance){
  server.post('/create', registerGroupHandler)
  server.get('/search', searchGroupHandler)
}

