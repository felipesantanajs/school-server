import prisma from '../../services/prisma'
import {CreateGroupSchema} from './group.schema'

export async function createGroup(input: CreateGroupSchema){
  const { name } = input

    const group = await prisma.class.create({
    data:{
      name
    }
  })
}
export async function searchGroup(){
  const group = await prisma.class.findMany()
  return group
}