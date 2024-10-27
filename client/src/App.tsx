import Login from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import HereSection from "./components/HereSection";
import MainLayout from "./layout/MainLayout";






const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
    
        <MainLayout />
     
    ),
    children: [
      {
        path: "/",
        element: <HereSection />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/search/:text",
      //   element: <SearchPage />,
      // },
      // {
      //   path: "/restaurant/:id",
      //   element: <RestaurantDetail />,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      // {
      //   path: "/order/status",
      //   element: <Success />,
      // },
      // admin services start from here
      // {
      //   path: "/admin/restaurant",
      //   element:<AdminRoute><Restaurant /></AdminRoute>,
      // },
      // {
      //   path: "/admin/menu",
      //   element:<AdminRoute><AddMenu /></AdminRoute>,
      // },
      // {
      //   path: "/admin/orders",
      //   element:<AdminRoute><Orders /></AdminRoute>,
      // },
    ],
  },
  {
    path: "/login",
    element:<Login />
  },
  {
    path: "/signup",
    element:<Signup /> ,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
]);

function App() {
 
  return (
    <main>
      <RouterProvider router={appRouter}></RouterProvider>
    </main>
  );
}

export default App;