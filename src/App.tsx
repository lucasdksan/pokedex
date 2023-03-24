import { RouterProvider } from "react-router-dom";
import { ModalMobileProvider } from "./contexts/ModalMobile";
import { OpenDataModalProvider } from "./contexts/OpenDataModal";
import router from "./router";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ModalMobileProvider>
        <OpenDataModalProvider>
          <RouterProvider router={router} />
        </OpenDataModalProvider>
      </ModalMobileProvider>
    </>
  )
}

export default App;
