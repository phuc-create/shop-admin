'use client'
import React from 'react'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

interface OverviewProps {
  title?: string
  dataKey: string
  data?: { [key: string]: string | number }[]
}
const Overview: React.FC<OverviewProps> = ({ data, dataKey }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        width={150}
        height={40}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={value => `${value}`}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={value => `$${value}`}
        />
        <Tooltip />
        <Bar
          dataKey={dataKey}
          fill="#000000"
          radius={[4, 4, 0, 0]}
          style={{ marginTop: 10 }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Overview
