import { createBrowserRouter, RouterProvider } from "react-router";

import ExperienceDetails from "./routes/formBuilder/FormExperience";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import CVBuilderLayout from "./routes/cv-builder/CVBuilderLayout";
import FormPersonalDetails from "./routes/cv-builder/FormPersonalDetails";
import FormExperiences from "./routes/cv-builder/FormExperiences";
import GeneratePdf from "./routes/cv-builder/GeneratePdf";
import NotFoundPage from "./routes/NotFoundPage";
import Templates from "./routes/cv-builder/Templates";
import Contact from "./routes/cv-builder/Contact";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/cv-builder/templates",
          element: <Templates />,
        },
        {
          path: "/cv-builder/contact",
          element: <Contact />,
        },
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
    {
      path: "/templates",
      element: <Templates />,
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
