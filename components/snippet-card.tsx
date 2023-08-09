"use client"

import React, { useEffect } from "react"
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";


let ExampleCode = `function VideoList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? 'Videos' : 'Video';
      heading = count + ' ' + noun;
    }
    return (
      <section>
        <h2>{heading}</h2>
        {videos.map(video =>
          <Video key={video.id} video={video} />
        )}
      </section>
    );
  }`

const Header = () => {
  return (
    <div className="space-y-1 px-4 pt-4">
      <h1 className="text-lg font-bold font-dyslexic italic text-primary">Display Videos</h1> {/* Title of Snippet*/}
      <p className="text-xs text-muted-foreground font-dyslexic"> {/* Description of Snippet*/}
          a snippet for displaying videos
      </p>
    </div>
  )
}

const Snippet = ({ code }: { code: string }) => {
  return (
    <pre className="p-5 !overflow-hidden !hover:overflow-scroll max-h-[150px] !bg-transparent"> 
      <code className="!font-terminus !font-bold !text-xs language-javascript twilight">
          {code}
      </code>
    </pre> 
  )
}

const Footer = () => {
  return (
    <div className="p-3 flex">
      <div className="flex mr-2 text-xs font-bold font-dyslexic text-primary flex-1 items-center justify-center"> footer</div>
      <Button type="submit" variant="custom" className="relative justify-start w-2/3 rounded-md">
        <h1 className="font-bold italic font-dyslexic text-background"> Practice Snippet</h1>
        <ArrowRight
        size="20"
        className="absolute -translate-y-1/2 right-4 top-1/2 invert dark:invert"
        />
      </Button>
    </div>
  )
}

export default function SnippetCard() {

    useEffect(() => {
        Prism.highlightAll();
    }, [])


    return (
       <div className="flex items-center justify-center mb-4 cursor-pointer">
        <div className="border-2 border-warning border-slate-500 dark:border-slate-700 shadow-slate-700 dark:shadow-slate-700 shadow-md rounded-lg dark:bg-slate-900/90 bg-slate-50 hover:shadow-xl">
          <Header/>
          <Separator className="my-4"/>
          <Snippet code={ExampleCode} />
          <Footer/>
        </div>
      </div>
    )
}