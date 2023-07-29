import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  title: string,
  linkAddress: string,
  Icon: React.ElementType
}

export default function MenuItem({ title, linkAddress, Icon }: MenuItemProps) {
  return (
    <div>
      <Link href={linkAddress} className='mx-4 lg:mx-6 hover:text-amber-600'>
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className='hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>
  )
}
