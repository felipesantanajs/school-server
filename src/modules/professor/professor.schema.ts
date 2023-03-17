import {z} from 'zod'

const createProfessorSchema = z.object({
  name:z.string()
})

export type CreateProfessorSchema = z.infer<typeof createProfessorSchema>