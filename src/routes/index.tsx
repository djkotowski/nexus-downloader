import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AppLayout from '~/layout/AppLayout'
import ModsPage from '~/routes/mods'
import SettingsPage from '~/routes/settings'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <ModsPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

export default function AppRouter() {
  return <RouterProvider future={{ v7_startTransition: true }} router={router} />
}
