"use client"
import SnippetCard from "@components/snippet-card"  
import MasonryGrid from "@components/masonry"
export const revalidate = "force-cache"
import useInfiniteData from "@hooks/useInfiniteData"
import { Skeleton } from "@/components/ui/skeleton"
import React from "react"


 function Home()  {
    
     const { data, lastElementRef, IsLoading, InitialDataLoaded, hasMore} = useInfiniteData()  

    return (
            <MasonryGrid>
                {!InitialDataLoaded? ["sm", "lg", "lg", "lg", "lg", "sm", "lg", "sm", "lg"].map((size, _) => (
                    <Skeleton className={ size === "sm" ? `h-10 w-[350px]` : `h-64 w-[350px]`} />
                )) : data.map((snippet, index) => (
                        data.length === index + 1 ? 
                        <div ref={lastElementRef}>
                            <SnippetCard {...snippet}/>
                        </div>
                        :  <SnippetCard {...snippet}/> ))}
                {IsLoading && InitialDataLoaded && hasMore && [1, 2, 3].map((_) => ( <Skeleton className="h-80 w-[350px]" /> ))}    
            </MasonryGrid>
        
    )
}

export default Home;