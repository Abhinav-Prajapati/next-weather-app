'use client'
import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import SearchDialog from '@/app/components/search-dialog'
import { ModeToggle } from '@/app/components/theme-toggle-button'
import { github } from '@/app/utils/Icons'


const Navbar = () => {
  const router = useRouter();
  return (
    <div className='w-full py-4 flex items-center justify-between'>
      <div className='left'></div>
      <div className=" search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ModeToggle />
          <Button
            onClick={() => { router.push("/link-t0-github-project") }}
            className='source-code flex items-center gap-2 '> {github}Source code</Button>

        </div>
      </div>
    </div>
  )
}

export default Navbar