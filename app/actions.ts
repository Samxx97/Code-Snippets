"use server"

import prisma from '@lib/db'
import { Prisma, type Snippet } from "@prisma/client";

interface PrismaRequest {
    skip?: number,
    take: number,
    cursor?: {
        id: number
    }
    orderBy?: {
        id: Prisma.SortOrder
    },
}

 export async function fetchNextPage(cursor: number | null | undefined, num_of_records: number): Promise<Snippet[]> {
    let newData: Snippet[];
        try {
            const requestData: PrismaRequest = 
            cursor ? {  // only skip cursor record if cursor is unDefined
                skip: 1,
                take: num_of_records,
                cursor: {
                    id: cursor,
                },
                orderBy:{
                    id: Prisma.SortOrder.asc
                },
            } : {
                take: num_of_records,
                orderBy:{
                    id: Prisma.SortOrder.asc
                },
            }
            newData = await prisma.snippet.findMany(requestData)
        } catch (e) {
            console.log(`failed to connect to database ${e}`)
            return []
        }
        return newData;

}
