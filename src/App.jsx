import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Services from "./pages/Services";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";

import BookDemo from "./pages/BookDemo";
import DemoSuccess from "./pages/DemoSuccess";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Pricing from "./pages/Pricing";
import ChildProfile from "./pages/ChildProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<LandingPage />}
          />

          <Route
            path="/services"
            element={<Services />}
          />
      
          <Route
            path="/about"
            element={<AboutUs />}
          />
          <Route
            path="/pricing"
            element={<Pricing />}
          />

          <Route
            path="/book-demo"
            element={<BookDemo />}
          />

        </Route>

        {/* Demo Success */}
        <Route
          path="/demo-success"
          element={<DemoSuccess />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Child Profile */}
        <Route
          path="/children"
          element={
            <ProtectedRoute>
              <ChildProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/children/:id"
          element={
            <ProtectedRoute>
              <ChildProfile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;