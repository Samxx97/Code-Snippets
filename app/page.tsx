import SnippetCard from "@components/snippet-card"
import MasonryGrid from "@components/masonry"
import prisma from "@lib/db"

export const revalidate = "force-cache"

async function getSnippets() {
    let data;
    try {
        data = await prisma.snippet.findMany({})
    } catch (e) {
        console.log("failed to connect to database")
        console.log(e)
        return []
    }
    return data
}

async function Home()  {
    const snippets =  await getSnippets()

    return (
        <MasonryGrid>
           {snippets.map((snippet) => (
            <SnippetCard {...snippet}/>
            ))}
        </MasonryGrid>
        
    )
}

export default Home;