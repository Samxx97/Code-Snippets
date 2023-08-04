import { Separator } from "@components/ui/separator";
import { AddSnippetForm } from "./components/add-snippet-form";

 async function AddSnippet() {
    return (
        <div className="container py-16">
            <div className="mx-auto max-w-xl space-y-6">
                <div className="space-y-3">
                    <h1 className="font-dyslexic font-bold text-4xl text-primary tracking-tighter">
                        Add Code Snippet
                    </h1>
                    <p className="font-dyslexic text-muted-foreground"> Add a code snippet in your preferred programming language</p>
                
                </div>
                <AddSnippetForm/>

            </div>
           
        </div>
    )
}

export default AddSnippet;