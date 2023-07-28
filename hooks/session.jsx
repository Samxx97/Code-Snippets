import { useState, useEffect, useCallback } from 'react';
import { getSession } from 'next-auth/react';

 // client side implementation of session 

export default function useSession() { 

  const [session, setSession] = useState(null)

  useEffect(() => {
    async function retrieveSession() {
      const session = await getSession();
      setSession(session)
    }
    console.log("retrieving session!")
    console.log(session)
    retrieveSession()
    return () => {

    }
      }, [])

  return { 
    session
  };
}