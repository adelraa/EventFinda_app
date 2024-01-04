import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import Checkout from './Checkout'

function CheckoutButton({event}:{event:IEvent}) {
    const hasEventFinished= new Date(event.EndDateTime) < new Date()
  return (
    <div className='flex items-center gap-3'>
        {hasEventFinished ?(
        <p className='text-red-400'>
            Sorry, the Tickets are not available
        </p>):(
            <>
            <SignedOut>
                <Button className='button rounded-full ' size="lg">
                    <Link href ="/sign-in">
                        Get Tickets
                    </Link>
                </Button>
            </SignedOut>
            <SignedIn>
                <Checkout event={event}/>
            </SignedIn>
            </>
        ) }
    </div>
  )
}

export default CheckoutButton
