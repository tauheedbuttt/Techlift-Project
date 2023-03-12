// Public Pages
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";

// Protected Pages
import Toll from "../features/toll/Toll";

export const protectedRoutes = [
  { path: "/home", element: <Toll /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> }
];
