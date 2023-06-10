import {
    createBrowserRouter
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddClasses from "../pages/Dashboad/Instructor/AddClasses";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Selected from "../pages/Dashboad/User/Selected/Selected";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addClasses',
                element: <AddClasses></AddClasses>
            },
            {
                path: '/classes',
                element: <PrivateRoutes><AllClasses></AllClasses></PrivateRoutes>,
            },
            {
                path: '/instructors',
                element: <InstructorsPage></InstructorsPage>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'sign-up',
        element: <SignUp></SignUp>
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'selected',
                element:<PrivateRoutes> <Selected></Selected></PrivateRoutes>
            }
        ]
    }
]);

