import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let user = localStorage.getItem("kidsnestUser");

  if (!user) {
    // Provide default session for Emma Carter so dashboard can be accessed directly
    const defaultUser = {
      name: "Emma Carter",
      role: "Nursery Manager",
      nurseryName: "Little Champs Day Nursery",
      email: "emma.carter@littlechamps.com",
    };
    try {
      localStorage.setItem("kidsnestUser", JSON.stringify(defaultUser));
    } catch (e) {
      // ignore
    }
  }

  return children;
};

export default ProtectedRoute;