import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signin from "./pages/Signin";
import Landing from "./pages/Landing";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Landing />
            }
        ]
    },
    {
        path: '/signin',
        element: <Signin />,
    },
])