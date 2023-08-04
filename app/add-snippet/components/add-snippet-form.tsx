"use client"
import React from "react"

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


export function AddSnippetForm() {

    const form  = useForm<snippet>({
        resolver: zodResolver(snippetSchema),
        defaultValues: {
            code: "import random \nprint(random.randint(0,9))",
            language: Languages.Python
        },
        mode: "onSubmit"
    })

    function onSubmit(values: snippet) {
        console.log(values)
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
                                        choose your programming language
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
                <Button type="submit" variant="custom">
                        Save Snippet
                </Button>
            </form>
        </Form>
    )


}