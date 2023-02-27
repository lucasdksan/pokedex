import { RouterProvider } from "react-router-dom";
import { OpenDataModalProvider } from "./contexts/OpenDataModal";
import router from "./router";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <OpenDataModalProvider>
        <RouterProvider router={router} />
      </OpenDataModalProvider>
    </>
  )
}

export default App;
