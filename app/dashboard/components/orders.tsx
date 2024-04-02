'use client'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@admin/components/ui/table'
import { redirect } from 'next/navigation'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

const orders_mock = [
  {
    orderID: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: 250,
    paymentMethod: 'Credit Card'
  },
  {
    orderID: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: 150,
    paymentMethod: 'PayPal'
  },
  {
    orderID: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: 350,
    paymentMethod: 'Bank Transfer'
  },
  {
    orderID: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: 450,
    paymentMethod: 'Credit Card'
  },
  {
    orderID: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: 550,
    paymentMethod: 'PayPal'
  },
  {
    orderID: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: 200,
    paymentMethod: 'Bank Transfer'
  },
  {
    orderID: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: 300,
    paymentMethod: 'Credit Card'
  }
]
const Orders = () => {
  const totals = orders_mock.reduce((pre, cur) => (pre += cur.totalAmount), 0)

  const moveToDetailsOrder = (id: string) => {
    console.log(id)
    redirect(`/dashboard/${id}`)
  }

  return (
    <Table>
      <TableCaption>A list of your recent orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders_mock.map(invoice => (
          <TableRow key={invoice.orderID}>
            <TableCell className="font-medium">{invoice.orderID}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">
              $ {invoice.totalAmount.toFixed(2)}
            </TableCell>
            <TableCell className="text-right">
              <Button>
                <Link href={`/dashboard/${invoice.orderID}`}>View</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$ {totals.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default Orders
