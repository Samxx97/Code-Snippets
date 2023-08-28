import snippets from "./data/snippets"
import { PrismaClient, Snippet } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    let results: Promise<Snippet>[] = []
    let Id = 0;
    for (const snippet of snippets) {

        let result =  prisma.snippet.upsert({
            where: { id: Id },
            create: {
                id: Id,
                ...snippet
            },
            update: snippet
        })
        results.push(result)
        Id++;
    }
    return Promise.all(results)
}

main().then(async (result) =>{
    console.log(result)
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})