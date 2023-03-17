import {z} from 'zod'

const createGroupSchema = z.object({
  name:z.string(),
  disciplinesArray: z.any(),
  studentsArray: z.any()
})

export type CreateGroupSchema = z.infer<typeof createGroupSchema>