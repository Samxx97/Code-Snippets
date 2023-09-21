import React from "react"


export default function Code({ snippet }: {
    snippet: string
}) {

    return (
        <div className="flex space-x-3"> 
            <div className="flex flex-col px-2 border-r-violet-300 border-r-2">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <div className="text-lg"> 
                        {num}
                    </div>
                ))}
            </div>
            <pre className="text-lg text-muted-foreground font-serif">
                {snippet}
            </pre>
        </div>
    )
}