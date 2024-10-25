import { useState,useEffect } from "react";
import React from 'react'







export default function Loader() {


  

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3500); // 3 second delay

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return (
    <div className='load'>
      loading...
    </div>
  )
}
