'use client'
import React from 'react'
import { Title } from '@/components/title/title'
import { Button } from '@/components/button/button'
import { NavBar } from '@/components/NavBar/NavBar'

const DashboardPage = (): JSX.Element => {
  return (
      <div>
          <NavBar currentPage={'Dashboard'} />
          <Title text={'Dashboard'} />
      </div>
  )
}

export default DashboardPage
