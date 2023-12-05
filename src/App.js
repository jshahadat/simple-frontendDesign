import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Listing from "./components/Listing/Listing";
import Main from "./layout/Main";
import GoogleSheet from "./components/GoogleSheet/GoogleSheet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Listing></Listing>,
        },
        {
          path: "/google-sheet",
          element: <GoogleSheet></GoogleSheet>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
