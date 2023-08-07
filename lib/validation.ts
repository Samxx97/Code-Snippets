/*import * as z from "zod"
import { DatabaseSchema } from "@customTypes/core"

export default function getValidationSchema(databaseProps: DatabaseSchema) {
    return z.object({
        language: z.nativeEnum(databaseProps.languages),
        code: z.string().min(30, {
            message: "code must be at least 30 characters long"
        })
    })
}*/

