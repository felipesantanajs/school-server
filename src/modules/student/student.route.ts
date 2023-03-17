import { FastifyInstance } from "fastify";
import registerStudentHandler from "./student.controller";

export default async function studentsRoutes(server:FastifyInstance){

  server.post('/create', registerStudentHandler)

} 