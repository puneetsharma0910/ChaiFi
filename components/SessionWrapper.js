"use client"
<<<<<<< HEAD
import React from "react"


import { SessionProvider } from "next-auth/react"
import { Children } from "react"

export default function SessionWrapper({Children}) {
  return (
    <SessionProvider>
         {Children}
=======
import { SessionProvider } from "next-auth/react"

export default function SessionWrapper({children}) {
  return (
    <SessionProvider>
      {children}
>>>>>>> main
    </SessionProvider>
  )
}