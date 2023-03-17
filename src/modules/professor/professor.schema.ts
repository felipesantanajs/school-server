import {z} from 'zod'

const createProfessorSchema = z.object({
  name:z.string()
})

const searchProfessorSchema = z.object({
  id:z.string()
})

export type CreateProfessorSchema = z.infer<typeof createProfessorSchema>
export type SearchProfessorSchema = z.infer<typeof searchProfessorSchema>