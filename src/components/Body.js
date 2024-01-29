import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import Shimmer from "./Shimmer";

const Browse = lazy(() => import("./Browse"));
const Watch = lazy(() => import("./Watch"));
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<Shimmer />}>
          <Browse />
        </Suspense>
      ),
    },
    {
      path: "/watch",
      element: (
        <Suspense fallback={<Shimmer />}>
          <Watch />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
