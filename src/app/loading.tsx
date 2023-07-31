import Image from 'next/image'
import React from 'react'
export default function Loading() {
  return (
    <div className='flex justify-center'>
      <Image height={58} width={58} src="spinner.svg" alt="loading" />
    </div>
  )
}
