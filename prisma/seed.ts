import snippets from "./data/snippets"
import { PrismaClient, Snippet } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    let results: Promise<Snippet>[] = []
    for (const snippet of snippets) {

        let result =  prisma.snippet.upsert({
            where: { id: `seed-${snippet.name}` },
            create: {
                id: `seed-${snippet.name}`,
                ...snippet
            },
            update: snippet
        })
        results.push(result)
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