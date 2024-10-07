import type { ReactNode } from 'react'

import AppFooter from '~/layout/AppFooter'
import AppNav from '~/layout/AppNav'

export default function AppLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="flex flex-col bg-brand-blue-950 text-gray-300 w-screen h-screen max-w-screen overflow-hidden select-none">
      <div className="flex-initial">
        <AppNav />
      </div>
      <div className="flex-auto overflow-y-auto">{children}</div>
      <div className="p-1">
        <AppFooter />
      </div>
    </div>
  )
}
