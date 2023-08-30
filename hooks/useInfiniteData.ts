"use client"
import { type Snippet } from "@prisma/client";
import { useEffect, useState } from "react";
import { fetchNextPage } from "../app/actions"
import useIsInViewPort from "./useIsInViewPort"

const REDCORDS_PER_PAGE = 6;

export default function useInfiniteData() {

    const [cursor, setCursor] = useState<number | null | undefined>(null)
    const [data, setData] = useState<Snippet[]>([])
    const [InitialDataLoaded, setInitialDataLoaded] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)
    const { isIntersecting, lastElementRef} = useIsInViewPort()
    
    useEffect(() => {
        if (!InitialDataLoaded) {
            setIsLoading(true)
            fetchNextPage(cursor, REDCORDS_PER_PAGE).then((data: Snippet[]) => {
                setData(data);
                if(data.length != 0) {
                    setCursor(data[data?.length - 1]?.id)
                }
                setInitialDataLoaded(true)
                setIsLoading(false)
                
            })
        }
        if (isIntersecting && InitialDataLoaded) {
            setIsLoading(true)
            fetchNextPage(cursor, REDCORDS_PER_PAGE).then((newData: Snippet[]) => {
                setData([...data, ...newData]) // concatenate old and new data
                if(newData.length != 0) {
                    setCursor(newData[newData?.length - 1]?.id)  // get a cursor to the last record
                }
                setIsLoading(false)
            
            })
        }
    }, [InitialDataLoaded, isIntersecting]);

    return {
        data,
        lastElementRef,
        IsLoading,
        InitialDataLoaded,
    }
 
}