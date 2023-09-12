"use client"
import React from "react"
import { useState } from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { snippet, snippetSchema, Languages } from "@models/snippets"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { enumToArray } from "@lib/utils"
import createNewSnippet from "../actions"
import { Icons } from "@components/icons"

export function AddSnippetForm() {
    const [isLoading, setLoading] = useState(false);

    const form  = useForm<snippet>({
        resolver: zodResolver(snippetSchema),
        defaultValues: {
            code: "import random \nprint(random.randint(0,9))",
            language: Languages.Python
        },
        mode: "onSubmit"
    })

    async function onSubmit(snippet: snippet) {
        try {
            setLoading(true)
            const result =  await createNewSnippet(snippet)
            
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
                    control={form.control}
                    name={"language"}
                    render = {({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium"> Language </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a programming language" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {enumToArray(Languages).map((language) => (
                                            <SelectItem value={language.value}> {language.key} </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription className="font-dyslexic text-muted-foreground text-xs">
                                        select your programming language
                                </FormDescription>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name={"code"}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm font-medium"> Code Snippet </FormLabel>
                            <FormControl>
                                <Textarea spellCheck={false} {...field} placeholder="This is where your code should be placed"/>
                            </FormControl>
                            <FormDescription className="font-dyslexic text-muted-foreground text-xs">
                                copy your code snippet into this box
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="custom" className="font-bold font-dyslexic text-background dark:text-background">
                    { isLoading && 
                    <Icons.spinner className="animate-spin h-4 w-4 mr-2"/>}
                    Save Snippet
                </Button>
            </form>
        </Form>
    )


}