"use server"

import prisma from '@lib/db'
import { Prisma, type Snippet, PrismaClient } from "@prisma/client";
import { stall } from '@lib/utils';
import { TypeOf } from 'zod';

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
            await stall()
            newData = await prisma.snippet.findMany(requestData)
        } catch (e) {
            console.log(`failed to connect to database ${e}`)
            return []
        }
        return newData;

}

export async function getTotalRecordCount(model: string): Promise<Number> {
     // @ts-ignore 
    var recordsCount = await prisma[model as keyof typeof prisma].count()
    return recordsCount
}
