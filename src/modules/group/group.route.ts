import { FastifyInstance } from "fastify";
import { registerGroupCompleteHandler, registerGroupHandler, searchGroupHandler } from "./group.controller";

export default async function groupRoutes(server:FastifyInstance){
  server.post('/create', registerGroupHandler)
  server.post('/create/complete', registerGroupCompleteHandler)
  server.get('/search', searchGroupHandler)
}

