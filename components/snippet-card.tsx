"use client"

import React, { useEffect } from "react"
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import { cn } from "@lib/utils";

const Header = ({ name, description }: { 
  name: string
  description: string

}) => {
  return (
    <div className="space-y-1 px-4 pt-4">
      <h1 className="text-xl font-bold stroke-black font-dyslexic italic text-secondary dark:text-primary"> {name} </h1> {/* Title of Snippet*/}
      <p className="text-sm text-muted-foreground font-bold font-dyslexic"> {/* Description of Snippet*/}
          {description}
      </p>
    </div>
  )
}

const CodeBlock = ({ code, language }: {
   code: string 
   language: string
  }) => {
  return (
    <pre className="p-5 !overflow-hidden !hover:overflow-scroll !bg-transparent w-[340px]"> 
      <code className={cn(
        "!font-terminus !font-bold !text-xs twilight",
        language && `language-${language}`
      )}
      >
        {code}
      </code>
    </pre> 
  )
}

const Footer = ({ language }: {
   language: string
  }) => {
  return (
    <div className="p-3 flex">
      <div className="flex mr-2 text-2xl font-bold font-dyslexic flex-1 items-center justify-center rounded-full gap-4"> 
          <i className=
          {cn(
            "text-secondary dark:text-primary",
             language && `nf nf-seti-${language}`
          )}/>
      </div>
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

interface CardProps {
  name: string
  description: string
  code: string
  language: string
}

export default function SnippetCard({ name, description, code, language  }: CardProps) {

    useEffect(() => {
        Prism.highlightAll();
    }, [])

    return (
       <div className="flex items-start justify-start mb-4 cursor-pointer w-[340px]">
        <div className="border-2 border-warning border-slate-500 dark:border-slate-700 shadow-slate-700 dark:shadow-slate-700 shadow-md rounded-lg dark:bg-slate-900/90 bg-slate-50 hover:shadow-xl">
          <Header name={name} description={description}/>
          <Separator className="my-4"/>
          <CodeBlock code={code} language={language}/>
          <Footer language={language}/>
        </div>
      </div>
    )
}