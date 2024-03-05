import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react";
import MainLayout from "./layout/MainLayout"
import AuthLayout from "./layout/AuthLayout"
import HomePage from "./pages/HomePage"

const AnimePage = lazy(() => import("./pages/AnimePage"))
const SearchPage = lazy(() => import("./pages/SearchPage"))
const SignInPage = lazy(() => import("./pages/SignInPage"))
const SignUpPage = lazy(() => import("./pages/SignUpPage"))

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: "/sign-in",
          element: (
            <Suspense>
              <SignInPage />
            </Suspense>
          )
        },
        {
          path: "/sign-up",
          element: (
            <Suspense>
              <SignUpPage />
            </Suspense>
          )
        },
        {
          path: '/',
          element: (
            <MainLayout />
          ),
          children: [
            {
              path: '/',
              element: <HomePage />
            },
            {
              path: '/search',
              element: (
                <Suspense>
                  <SearchPage />
                </Suspense>
              )
            },
            {
              path: '/anime/:animeId',
              element: (
                <Suspense>
                  <AnimePage />
                </Suspense>
              )
            }
          ]
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
