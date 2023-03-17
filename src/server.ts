
import fastify from "fastify";

import studentsRoutes from "./modules/student/student.route";
import groupRoutes from "./modules/group/group.route";
import professorRoutes from "./modules/professor/professor.route";
import disciplineRoutes from "./modules/discipline/discipline.route";

const app = fastify()

async function main(){

  app.register(groupRoutes,{
    prefix:'api/groups'
  })
 
  app.register(professorRoutes,{
    prefix:'api/professors'
  })
  app.register(disciplineRoutes,{
    prefix:'api/disciplines'
  })
  app.register(studentsRoutes,{
    prefix:'api/students'
  })

  try{
    await app.listen({
      host: '0.0.0.0',
      port: 3333
    }).then(()=>{
      console.log('HTTP Server running')
    })
  }catch(err){
    console.log(err)
    process.exit(1);
  }
}
main();



// app.get('/students', async () =>{

//   const students = await prisma.student.findMany()

//   return { students }
// })

// app.post('/create-class', async (request, reply) =>{
  
//   const createClassSchema = z.object({
//     name:z.string()
//   })

//   const { name } = createClassSchema.parse(request.body)
//   console.log(name)
//   const createClass = await prisma.class.create({
//     data:{
//       name,
//     }
//   })

//   return reply.status(201).send()
// })

// app.post('/create-students', async (request, reply) =>{
  
//   const createUserSchema = z.object({
//     name:z.string(),
//     classId: z.number()
//   })

//   const { name, classId } = createUserSchema.parse(request.body)
  
//   const createStudents = await prisma.student.create({
//     data:{
//       name,
//       classId
//     }
//   })

//   return reply.status(201).send()
// })

// app.post('/create-professor', async (request, reply) =>{
  
//   const createProfessorSchema = z.object({
//     name:z.string()
//   })

//   const { name } = createProfessorSchema.parse(request.body)
  
//   const createProfessor = await prisma.professor.create({
//     data:{
//       name
//     }
//   })

//   return reply.status(201).send()
// })

// app.post('/create-discipline', async (request, reply) =>{
  
//   const createDisciplineSchema = z.object({
//     name:z.string(),
//     classid: z.number(),
//     professorId: z.number()
//   })

//   const { name,classid, professorId } = createDisciplineSchema.parse(request.body)
  
//   const createDiscipline = await prisma.discipline.create({
//     data:{
//       name,
//       classid,
//       professorId
//     }
//   })

//   return reply.status(201).send()
// })

