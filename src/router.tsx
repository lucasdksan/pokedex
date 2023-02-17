import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Search from "./pages/Search";
import Legendaries from "./pages/Legendaries";

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
    },
    {
        path: "/legendaries",
        element: <Legendaries />,
        errorElement: <Error />
    }
]);

export default router;