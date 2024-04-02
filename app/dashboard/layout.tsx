import React from 'react'
interface DashBoardLayoutProps {
  children?: React.ReactNode
}
const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return <div className="flex h-full w-full flex-col p-4">{children}</div>
}

export default DashBoardLayout
