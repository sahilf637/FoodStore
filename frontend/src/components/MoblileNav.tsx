import React from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

type Props = {}

function MoblileNav({}: Props) {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'/>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
                <span> Wellcome to FoodStore.com!</span>
                <Separator/>
            </SheetTitle>
            <SheetDescription className='flex'>
                <Button className='flex-1 font-bold bg-orange-500'>LogIn</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MoblileNav