import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@admin/components/ui/card'
import Overview from './components/overview'
import { CHART_DATAS, MONTHLY_DATAS } from './mock-data'
import Orders from './components/orders'

const DashBoardPage = () => {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={MONTHLY_DATAS} dataKey="total" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Weekly</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={CHART_DATAS} dataKey="total" />
          </CardContent>
        </Card>
      </div>
      <div className="relative mt-4 overflow-scroll">
        <Card className="relative min-w-[500px]">
          <CardHeader>
            <CardTitle>Orders tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <Orders />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashBoardPage
