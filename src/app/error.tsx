'use client'
import React, { useEffect } from 'react'

interface ErrorProps {
  error: Error,
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error)
  }, [error]);
  return (
    <div className="text-center mt-10 ">
      <h1>Something went wrong</h1>
      <button onClick={() => reset()} className='hover:text-amber-600'>Try Again</button>
    </div>
  )
}
