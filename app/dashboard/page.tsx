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
    <>
      <div className="grid grid-cols-2 gap-4">
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
      <div className="mt-4 table">
        <Card>
          <CardHeader>
            <CardTitle>Orders tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <Orders />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default DashBoardPage
