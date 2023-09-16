"use client"
import { type Snippet } from "@prisma/client";
import { useEffect, useState } from "react";
import { fetchNextPage, getTotalRecordCount } from "../app/actions"
import useIsInViewPort from "./useIsInViewPort"

const REDCORDS_PER_PAGE = 6;

export default function useInfiniteData() {

    const [cursor, setCursor] = useState<number | null | undefined>(null)
    const [data, setData] = useState<Snippet[]>([])
    const [InitialDataLoaded, setInitialDataLoaded] = useState(false)
    const [IsLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const { isIntersecting, lastElementRef} = useIsInViewPort()

    const fetchData = async () => {
        setIsLoading(true);
        const newData = await fetchNextPage(cursor, REDCORDS_PER_PAGE);
        setData((prevData) => [...prevData, ...newData]); // concatenate old and new data
        if(newData.length != 0) {
            setCursor(newData[newData?.length - 1].id) // set cursor to the last record
        }
    } 
    
    useEffect(() => {
        getTotalRecordCount("snippet").then((totalRecordCount) => {
            if (data.length === totalRecordCount) {
                setHasMore(false)
                return;
            }
            setHasMore(true)
        })
    }, [data])

    useEffect(() => {
        if(!InitialDataLoaded) {
            fetchData().then(() => {
                setInitialDataLoaded(true)
                setIsLoading(false)
            })
        }
    }, [InitialDataLoaded])
    
    useEffect(() => {
        if (isIntersecting && InitialDataLoaded) {
            fetchData().then(() => {
                setIsLoading(false)
            })
         
        }
    }, [InitialDataLoaded, isIntersecting]);


    return {
        data,
        lastElementRef,
        IsLoading,
        InitialDataLoaded,
        hasMore,
    }
 
}