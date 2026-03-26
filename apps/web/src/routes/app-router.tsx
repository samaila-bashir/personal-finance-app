import { Navigate, createBrowserRouter } from "react-router-dom"

import { AppLayout, PageTitle } from "@/routes/route-components"
import { NAV_ITEMS } from "@/routes/nav-items"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to={NAV_ITEMS[0].path} replace /> },
      ...NAV_ITEMS.map((item) => ({
        path: item.path.slice(1),
        element: <PageTitle title={item.label} />,
      })),
      { path: "*", element: <Navigate to={NAV_ITEMS[0].path} replace /> },
    ],
  },
])
