import { Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider';
import React from 'react'

interface ContentProps {
   children: React.ReactNode
}

export const ContentWrap = ({ children }: ContentProps) => {
   return (
      <>
         <Sider />
         <Header></Header>
         {children}
      </>
   )
}
