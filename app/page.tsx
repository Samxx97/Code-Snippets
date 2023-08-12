'use client'
import { useEffect, useState } from "react";
import SnippetCard from "@components/snippet-card"
import snippets from "@prisma/data/snippets"
import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Home = () => {

    return (
    <>  
    <div className="w-[85%] my-4">
    <Masonry columnsCount={3}>
            {snippets.map((snippet) => (
                <SnippetCard {...snippet}/>
            ))}
    </Masonry>     

    </div>
          
     </>

    )
}

export default Home;