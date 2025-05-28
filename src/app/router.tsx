import { createBrowserRouter, RouterProvider } from "react-router";
import LandingRoute from "./routes/landing";
import FormBuilder from "./routes/formBuilder/FormBuilder";
import ExperienceDetails from "./routes/formBuilder/FormExperience";

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
    {
      path: "/experiences-details",
      element: <ExperienceDetails />,
    },
  ]);
export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
