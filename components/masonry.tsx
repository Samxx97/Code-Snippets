'use client'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import React from "react";

interface props  { 
    children: React.ReactNode
 }

const MasonryGrid = ({ children }: props) => {
    return (
        <div className="w-[82%] my-4">
             <ResponsiveMasonry columnsCountBreakPoints={{400: 1, 950: 2, 1400: 3}}>
                <Masonry columnsCount={3} gutter="15px">
                        {children}
                </Masonry>  
            </ResponsiveMasonry>   
        </div>
        )

}

export default MasonryGrid;