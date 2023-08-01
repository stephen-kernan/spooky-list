import React from 'react'
import { Title } from '@/components/title/title'
import { Button } from '@/components/button/button'
import { NavBar } from '@/components/NavBar/NavBar'

const Page = (): JSX.Element => {
  return (
      <div>
          <NavBar currentPage={'Catalog'} />
          <Title text={'Catalog'} />
      </div>
  )
}
export default Page
