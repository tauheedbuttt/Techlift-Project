import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { publicRoutes, protectedRoutes } from "./config/routes";
import NoPage from "./components/NoPage";
import './App.css'

const Redirect = ({ element }) => {
  const { token } = useSelector((state) => state.auth);
  return !token ? <Navigate to={"/login"} /> : element;
};

function App() {
  return (
    <Routes>
      {publicRoutes?.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      {protectedRoutes?.map((route, index) => (
        <Route
          key={index}
          {...route}
          element={<Redirect {...route} />}
        />
      ))}

      <Route
        path="/"
        element={<Redirect element={<Navigate to="/home" />} />}
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
