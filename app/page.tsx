'use client'
import { useEffect, useState } from "react";
import SnippetCard from "@components/snippet-card"
import snippets from "@prisma/data/snippets"
import React from "react";

const Home = () => {

    return (
    <>  
        <section className="flex flex-col flex-wrap">
            <div className=" columns-3">
            {snippets.map((snippet) => (
                <SnippetCard {...snippet}/>
            ))}
            </div>
          
            
           

        </section>        
     </>

    )
}

export default Home;