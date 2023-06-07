import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <App></App>
            }
        ]
    },
]);

