"use client"
import SnippetCard from "@components/snippet-card"
import MasonryGrid from "@components/masonry"
export const revalidate = "force-cache"
import useInfiniteData from "@hooks/useInfiniteData"

 function Home()  {
    
     const { data, lastElementRef } = useInfiniteData()  

    return (
            <MasonryGrid>
            {data.map((snippet, index) => (
                data.length === index + 1 ? 
                <div ref={lastElementRef}>
                    <SnippetCard {...snippet}/>
                </div>
                 :  <SnippetCard {...snippet}/>

                ))}
            </MasonryGrid>
        
    )
}

export default Home;