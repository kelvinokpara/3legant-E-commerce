import { Routes, Route } from "react-router";
// Layouts
import MainLayout from "../layouts/MainLayout";
// Pages
import Homepage from "../pages/Homepage";
import AuthPage from "../pages/AuthPage";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Homepage />
          </MainLayout>
        }
      />
      <Route path={"/accounts/:id"} element={<AuthPage />} />
    </Routes>
  );
};

export default Router;
