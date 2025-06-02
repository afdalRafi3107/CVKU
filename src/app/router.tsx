import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./routes/Home";
import FormBuilder from "./routes/form-builder";
import Layout from "./routes/Layout";
import FormLayout from "./routes/form-builder/FormLayout";
import NotFoundPage from "./routes/NotFoundPage";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/form-builder",
          element: <FormLayout />,
          children: [
            {
              index: true,
              element: <FormBuilder />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};
