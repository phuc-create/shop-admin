import React from 'react'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'
interface OrderDetailsLayoutProps {
  children?: React.ReactNode
}
const OrderDetailsLayout: React.FC = ({
  children
}: OrderDetailsLayoutProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center px-16">
        <Link href="/dashboard">
          <Button className="mb-4 mr-2">Dashboard</Button>
        </Link>
        <Link href="/dashboard">
          <Button className="mb-4  mr-2">Orders</Button>
        </Link>
        <Link href="/">
          <Button className="mb-4  mr-2">Log-out</Button>
        </Link>
      </div>
      {children}
    </div>
  )
}

export default OrderDetailsLayout
