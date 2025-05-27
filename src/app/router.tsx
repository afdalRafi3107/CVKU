import { createBrowserRouter, RouterProvider } from "react-router";
import LandingRoute from "./routes/landing";
import FormBuilder from "./routes/form-builder";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <LandingRoute />,
    },
    {
      path: "/personal-details",
      element: <FormBuilder />,
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
