// import Image from 'next/image'
'use client'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return 'Loading...'
  if (error) return 'Error'
  if (user) {
    return (
      <div>
        Hi {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }

  return <a href="/api/auth/login?returnTo=/dashboard">Login</a>
}
