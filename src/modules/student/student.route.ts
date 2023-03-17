import { FastifyInstance } from "fastify";
import { findStudentHandler, registerStudentHendler, removeStudentHandler } from "./student.controller";

export default async function studentsRoutes(server:FastifyInstance){

  server.post('/create', registerStudentHendler)
  server.get('/:id', findStudentHandler)
  server.post('/remove/:id', removeStudentHandler)
} 