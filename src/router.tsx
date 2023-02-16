import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Search from "./pages/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/pokedex",
        element: <Search />,
        errorElement: <Error />
    }
]);

export default router;