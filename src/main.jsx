import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Menu from "./pages/menu/Menu";
import { HelmetProvider } from "react-helmet-async";
import Order from "./pages/order/Order";
import Login from "./pages/Login";
import AuthProvider from "./provider/AuthProvider";
import SignUp from "./pages/SignUp";
import Secret from "./shared/Secret";
import PrivateRoutes from "./routes/PrivateRoutes";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Dashboard from "./layout/Dashboard";
import Cart from "./pages/cart/Cart";
import AllUsers from "./pages/Doshboard/AllUsers";
import AddItems from "./pages/Doshboard/AddItems";
import AdminRoute from "./routes/AdminRoute";
import ManageItem from "./pages/Doshboard/ManageItem";
import UpdateItem from "./pages/Doshboard/UpdateItem";
import Payment from "./pages/Doshboard/Payment/Payment";
import PaymentHistory from "./pages/Doshboard/PaymentHistory";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
      // normal users routes
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      // admin routes
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
