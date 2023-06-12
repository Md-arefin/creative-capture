import {
    createBrowserRouter
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddClasses from "../pages/Dashboard/Instructor/AddClasses";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Selected from "../pages/Dashboard/User/Selected/Selected";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";

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
            // user routes
            {
                path: 'selected',
                element: <Selected></Selected>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

            // Instructors routes
            {
                path: 'addClass',
                element: <InstructorRoute> <AddClasses></AddClasses></InstructorRoute>
            },
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // ADMIN ROUTES
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            }
        ]
    }
]);

