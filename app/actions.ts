"use server"

import prisma from '@lib/db'
import { Prisma, type Snippet, PrismaClient } from "@prisma/client";
import { stall } from '@lib/utils';

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
        try {
            const requestData: PrismaRequest = { 
                take: num_of_records,
                orderBy:{
                    id: Prisma.SortOrder.asc
                },
            }
            if (cursor) {  // if cursor is defined skip the cursor record
                requestData.cursor = {
                    id: cursor,
                }
                requestData.skip = 1;
            }
            // await stall()
            const newData =  await prisma.snippet.findMany(requestData)
            return newData
        } catch (e) {
            console.log(`error fetching from database ${e}`)
            return []
        }

}

interface PrismaModel<_> {
    count(): Promise<number>;
}

export async function getTotalRecordCount<T extends keyof PrismaClient>(
    modelName: T
): Promise<number> {
    try {
        const prismaModel = prisma[modelName] as PrismaModel<PrismaClient[T]>;
        const recordsCount = await prismaModel.count();
        return recordsCount;
    } catch (e) {
        console.log(`Failed to fetch record count for model ${modelName as string}: ${e}`);
        return -1;
    }
}
