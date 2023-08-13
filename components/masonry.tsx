'use client'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import React from "react";

console.log("client component ")

interface props  { 
    children: React.ReactNode
 }

const MasonryGrid = ({ children }: props) => {
    return (
        <div className="w-[80%] my-4">
            <Masonry columnsCount={3}>
                    {children}
            </Masonry>     
        </div>
        )

}

export default MasonryGrid;