import { Navigate, createBrowserRouter } from "react-router-dom"

import { toChildPath } from "@/helpers/routes"
import { OverviewPage } from "./pages/overview-page"
import { AppLayout, PageTitle } from "@/routes/route-components"
import { NAV_ITEMS } from "@/routes/nav-items"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      ...NAV_ITEMS.map((item) => ({
        path: toChildPath(item.path),
        element:
          item.id === "overview" ? (
            <OverviewPage />
          ) : (
            <PageTitle title={item.label} />
          ),
      })),
      { path: "*", element: <Navigate to={NAV_ITEMS[0].path} replace /> },
    ],
  },
])
