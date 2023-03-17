import {z} from 'zod'

const createGroupSchema = z.object({
  name:z.string()
})

export type CreateGroupSchema = z.infer<typeof createGroupSchema>