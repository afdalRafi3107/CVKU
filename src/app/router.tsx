import { createBrowserRouter, RouterProvider } from "react-router";

import LandingRoute from "./routes/landing";
import FormBuilder from "./routes/formBuilder/FormBuilder";
import ExperienceDetails from "./routes/formBuilder/FormExperience";


const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/cv-builder",
          element: <CVBuilderLayout />,
          children: [
            {
              path: "/cv-builder/personal-details",
              element: <FormPersonalDetails />,
            },
            {
              path: "/cv-builder/experiences",
              element: <FormExperiences />,
            },
            {
              path: "/cv-builder/generate-pdf",
              element: <GeneratePdf />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
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
