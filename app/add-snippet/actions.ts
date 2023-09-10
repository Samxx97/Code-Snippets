"use server"

import prisma from '@lib/db'
import { getCurrentUser } from '@lib/session'

 async function createNewSnippet(data: any) {
  
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("you are unauthorized to do this action")
  }
  try {
    const result = await prisma.snippet.create({
      data: {
        name: "test",
        description: "test",
        ...data
      },
    })

    return result;

  } catch (error) {
    console.log("here error is probably a connection error")
    throw (error)
  }
          
}
export default createNewSnippet;