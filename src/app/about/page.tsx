'use client'
import React from 'react'
import { Title } from '@/components/title/title'
import { Button } from '@/components/button/button'
import { NavBar } from '@/components/NavBar/NavBar'

const Page = (): JSX.Element => {
  return (
      <div>
          <NavBar currentPage={'About'} />
          <Title text={'About'} />
      </div>
  )
}

export default Page
