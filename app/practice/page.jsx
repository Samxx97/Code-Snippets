import Code  from "./components/code"

const TEST_STRING =  `x = 4;
print(hey);`;

export async function Practice() {
    return (
       
        <div className="w-full pt-12 opacity-90">
            <div className="relative w-[50rem] mx-auto flex flex-col space-y-4 justify-center rounded-md bg-slate-950 p-8 border-2 border-warning border-slate-500 dark:border-slate-700 ">
                <div className="flex flex-col space-y-2">
                    <h1 className="font-dyslexic font-bold text-3xl text-secondary dark:text-primary tracking-tighter"> Type Code Snippet </h1>
                    <p className="pl-2 font-dyslexic text-sm text-muted-foreground">start typing away to initiate countdown</p>
                </div>
                <Code snippet={TEST_STRING}/>
            </div>
           
        </div>
    )
}

export default Practice;