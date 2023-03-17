import {z} from 'zod'

const createStudentSchema = z.object({
  name:z.string(),
  classId: z.number()
})

export type CreateStudentSchema = z.infer<typeof createStudentSchema>