import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import AllClasses from "../pages/AllClasses/AllClasses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddClasses from "../pages/Instructor/AddClasses";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
                path:'/addClasses',
                element: <AddClasses></AddClasses>
            },
            {
                path: '/classes',
                element: <AllClasses></AllClasses>,
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
    }
]);

