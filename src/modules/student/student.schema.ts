import {z} from 'zod'

const createStudentSchema = z.object({
  name:z.string(),
  classId: z.number()
})

const searchStudentSchema = z.object({
  id:z.string(),
 
})

export type CreateStudentSchema = z.infer<typeof createStudentSchema>
export type SearchStudentSchema = z.infer<typeof searchStudentSchema>