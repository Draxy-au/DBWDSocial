import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";

import './App.scss';
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";


function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div className="content">
          <LeftBar/>
          <div className="feed">
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login"/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
  ])

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
