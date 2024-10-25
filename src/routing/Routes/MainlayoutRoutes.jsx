import React, { lazy, Suspense } from 'react'
import Loader from '../../components/loader/Loader'




const Home  = lazy(() => import('../pages/Home/Home'))

const Mainlayout = lazy(() => import("../layouts/Mainlayout"))
const Cart = lazy(() => import("../pages/cart/Cart"))
const PlaceOrder = lazy(() => import("../pages/PlaceOrder/PlaceOrder"))

const MainlayoutRoutes = [
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home/>
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        )
      },
      {
        path: "/order",
        element: (
          <Suspense fallback={<Loader />}>
            <PlaceOrder/>
          </Suspense>
        )
      },
    ],
  },
]

export default MainlayoutRoutes