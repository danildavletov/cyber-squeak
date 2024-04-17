import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageMain from "./pages/PageMain/PageMain";
import PageSettings from "./pages/PageSettings/PageSettings";
import PageLogin from "./pages/PageLogin/PageLogin";
import AppContext from "./context/AppContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(true);
  };

  const router = createBrowserRouter([
    { path: "/", element: <PageMain />, errorElement: <p>Нет такого пути</p> },
    { path: "/settings", element: <PageSettings /> },
    {
      path: "/login",
      element: <PageLogin />,
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: handleLogin,
        logoutHandler: handleLogout,
      }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
