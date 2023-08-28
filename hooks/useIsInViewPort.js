"use client"

import { useState, useEffect, useMemo, useRef, useCallback } from "react";

export default function useIsInViewport() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = useRef(null)

    const lastElementRef = useCallback(
      (nodeElement) => {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setIsIntersecting(true)
          } else {
            setIsIntersecting(false)
          }
        }, {threshold: 0.75});
        if (nodeElement) observer?.current?.observe(nodeElement)

      },[]);
  
  
    return { 
      isIntersecting,
      lastElementRef, 
      };
  }

