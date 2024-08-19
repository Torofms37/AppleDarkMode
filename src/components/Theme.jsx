'use client';
import { useEffect, useState } from "react"
import { AppleMac } from "iconoir-react";


const DarkMode = () => {
  const [dark, setDark] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (dark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [dark])

  return <div className="cursor-pointer" onClick={() => setDark(!dark)}>

    {dark ? 
      <AppleMac className="text-black"/> 
        : 
      <AppleMac className="fill-blue-200"/>}

  </div>

}

export default DarkMode();