import { Outlet } from 'react-router-dom'

import AppFooter from '~/layout/AppFooter'
import AppNav from '~/layout/AppNav'

export default function AppLayout() {
  return (
    <div className="flex flex-col bg-brand-blue-950 text-gray-300 w-screen h-screen max-w-screen overflow-hidden select-none">
      <div className="flex-initial">
        <AppNav />
      </div>
      <div className="flex-auto overflow-y-auto">
        <Outlet />
      </div>
      <div className="p-1">
        <AppFooter />
      </div>
    </div>
  )
}
