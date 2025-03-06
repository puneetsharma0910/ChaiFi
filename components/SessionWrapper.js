"use client"
import React from "react"


import { SessionProvider } from "next-auth/react"
import { Children } from "react"

export default function SessionWrapper({Children}) {
  return (
    <SessionProvider>
         {Children}
    </SessionProvider>
  )
}