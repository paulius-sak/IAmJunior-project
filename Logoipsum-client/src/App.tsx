import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import SearchCategory from "./pages/SearchCategory";
import { ROUTES } from "./router/consts";
import RootLayout from "./components/Navbar/RootLayout";
import { UserProvider } from "./context/UserContext";
import MyAccount from "./pages/MyAccount";
import MyBookings from "./pages/MyBookings";
import Business from "./pages/Business";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
      {
        path: ROUTES.MYACCOUNT,
        element: <MyAccount />,
      },
      {
        path: ROUTES.MYBOOKINGS,
        element: <MyBookings />,
      },
      {
        path: ROUTES.BUSINESS,
        element: <Business />,
      },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider> 
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;