import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@admin/components/ui/card'
import { Button } from '@admin/components/ui/button'
import { Icons } from '@admin/components/icons/icons'
import { Label } from '@admin/components/ui/label'
import { Input } from '@admin/components/ui/input'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '../../../components/ui/avatar'
import Separator from './components/seperator'
import { Badge } from '../../../components/ui/badge'
import { CreditCard } from 'lucide-react'
interface OrderDetailsPageProps {
  params: {
    id: string
  }
}
const OrderDetailsPage: React.FC<OrderDetailsPageProps> = ({ params }) => {
  const user_mock = [
    { field: 'Invoice Number', value: params.id },
    { field: 'Invoice Date', value: '20/03/2024' },
    // { field: 'User', value: 'Olivia Martin' },
    {
      field: 'Status',
      value: <Badge variant="secondary">Processing</Badge>
    }
    // { field: 'User', value: 'Olivia Martin' },
    // { field: 'User', value: 'Olivia Martin' },
    // { field: 'User', value: 'Olivia Martin' }
  ]

  const card_items = [
    {
      id: '81238912391',
      product: 'Kimetsu NoZaiba T01',
      category: 'Kimetsu',
      price: 12,
      quantity: 2
    },
    {
      id: '812389111111',
      product: 'Dragon Ball 7x Namek',
      category: 'Dragon Ball',
      price: 40,
      quantity: 1
    },
    {
      id: '812389999999',
      product: 'Gohan Study time',
      category: 'Dragon Ball',
      price: 30,
      quantity: 1
    },
    {
      id: '91724444283',
      product: 'Luffy Funny',
      category: 'One Piece',
      price: 12,
      quantity: 2
    },
    {
      id: '91555571283',
      product: 'Dragon King',
      category: 'One Piece',
      price: 12,
      quantity: 4
    },
    {
      id: '91777776283',
      product: 'Zoro slices',
      category: 'One Piece',
      price: 20,
      quantity: 8
    }
  ]
  return (
    <div className="grid w-full grid-cols-2 gap-4 px-16">
      <Card>
        <CardHeader>
          <CardTitle className="font-light">Details {params.id}</CardTitle>
          {/* <CardDescription>general information</CardDescription> */}
        </CardHeader>

        <Separator text="General information" />

        {user_mock.map((line, idx) => {
          return (
            <div key={idx} className="flex items-center px-4 py-2">
              <p className="text-sm font-light leading-none">{line.field}:</p>
              <div className="ml-auto text-sm font-normal">{line.value}</div>
            </div>
          )
        })}
        <Separator text="Items" />
        <CardContent className="p-4">
          {card_items.map(item => (
            <div
              key={item.id}
              className="mb-6 grid grid-cols-4 items-center justify-center"
            >
              <div className="col-span-2">
                <p className="text-sm font-medium leading-none">
                  {item.product}, ${item.price}
                </p>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
              <div className="ml-auto text-sm text-muted-foreground">
                x{item.quantity}
              </div>
              <div className="ml-auto font-medium">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="">
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Totals</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>$299.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>$5.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>$25.00</span>
              </li>
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>$329.00</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Shipping Information</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>Nguyen Huu Phuc</span>
                <span>53 num, block 5, Khue Ngoc Dien</span>
                <span>Dak Lak, Buon Ma Thuot</span>
              </address>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Billing Information</div>
              <div className="text-muted-foreground">
                Same as shipping address
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>Nguyen Huu Phuc</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">phuc82908@gmail.com</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">+84 375 990 006</a>
                </dd>
              </div>
            </dl>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Payment Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderDetailsPage
