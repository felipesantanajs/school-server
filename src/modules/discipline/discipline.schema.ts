import {z} from 'zod'

  const createDisciplineSchema = z.object({
    name:z.string(),
    classId: z.number(),
    professorId: z.number()
  })

export type CreateDisciplineSchema = z.infer<typeof createDisciplineSchema>