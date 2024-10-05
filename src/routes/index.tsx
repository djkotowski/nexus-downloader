import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import InitialScreen from '~/InitialScreen'
import AppLayout from '~/layout/AppLayout'

const router = createBrowserRouter(
  [
    { path: '/', element: <InitialScreen /> },
    { path: '/app', element: <AppLayout />, children: [] },
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
