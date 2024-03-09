import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy } from "react";
import MainLayout from "./layout/MainLayout"
import AuthLayout from "./layout/AuthLayout"

const HomePage = lazy(() => import("./pages/HomePage"))
const AnimePage = lazy(() => import("./pages/AnimePage"))
const SearchPage = lazy(() => import("./pages/SearchPage"))
const SignUpPage = lazy(() => import("./pages/SignUpPage"))
const SignInPage = lazy(() => import("./pages/SignInPage"))

function App() {

  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/sign-in",
          element: <SignInPage />
        },
        {
          path: "/auth/sign-up",
          element: <SignUpPage />
        }
      ],

    },
    {
      path: '/',
      element: (
        <MainLayout />
      ),
      children: [
        {
          path: '/',
          element: (
            <HomePage />
          )
        },
        {
          path: '/search',
          element: (
            <SearchPage />
          )
        },
        {
          path: '/anime/:animeId',
          element: (
            <AnimePage />
          )
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
