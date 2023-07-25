'use client'

import { SessionProvider, getSession } from "next-auth/react";
import { useState, useEffect } from "react";


const Provider  = ({ children }) => {
    
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default Provider ;