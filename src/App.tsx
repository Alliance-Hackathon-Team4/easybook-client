import { RouterProvider } from "react-router";
import { Router } from "./Router";
import "./theme/GlobalStyle.css"

function App() {
  return <>
  <RouterProvider router={Router}/>
  </>;
}

export default App;
