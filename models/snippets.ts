import * as z from "zod"

export enum Languages {
    TypeScript = "typescript",
    Java = "java",
    Python = "python",
    PHP = "php",
    JavaScript = "javascript"
}

const snippetSchema = z.object({
    language: z.nativeEnum(Languages),
    code: z.string().min(30, {
        message: "code must be at least 30 characters long"
    })
})

type snippet = z.infer<typeof snippetSchema>

export {
    type snippet,
    snippetSchema
}
