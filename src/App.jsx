import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/contact", element: <ContactPage /> },
      ],
    },
  ]);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
