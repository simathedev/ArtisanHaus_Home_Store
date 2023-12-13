import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
    </div>
  )
}
