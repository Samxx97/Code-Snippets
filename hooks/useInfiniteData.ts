"use client"
import { type Snippet } from "@prisma/client";
import { useEffect, useState } from "react";
import { fetchNextPage } from "../app/actions"
import useIsInViewPort from "./useIsInViewPort"

const REDCORDS_PER_PAGE = 6;

export default function useInfiniteData() {

    const [cursor, setCursor] = useState<number | null | undefined>(null)
    const [data, setData] = useState<Snippet[]>([])
    const { isIntersecting, lastElementRef} = useIsInViewPort()
    const [InitialDataLoaded, setInitialDataLoaded] = useState(false)

    useEffect(() => {
        if (!InitialDataLoaded) {
            fetchNextPage(cursor, REDCORDS_PER_PAGE).then((data: Snippet[]) => {
                setData(data);
                if(data.length != 0) {
                    setCursor(data[data?.length - 1]?.id)
                }
                setInitialDataLoaded(true)
            })
        }
        if (isIntersecting && InitialDataLoaded) {
            fetchNextPage(cursor, REDCORDS_PER_PAGE).then((newData: Snippet[]) => {
                setData([...data, ...newData]) // concatenate old and new data
                if(newData.length != 0) {
                    setCursor(newData[newData?.length - 1]?.id)  // get a cursor to the last record
                }
            })
        }
    }, [InitialDataLoaded, isIntersecting]);

    return {
        data,
        lastElementRef
    }
 
}