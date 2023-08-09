'use client'
import { useEffect, useState } from "react";
import SnippetCard from "@components/snippet-card"

const Home = () => {

    return (
    <>  
        <section className="w-[90%] py-4 gap-6 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>
            <SnippetCard/>

        </section>        
     </>

    )
}

export default Home;