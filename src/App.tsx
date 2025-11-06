import { RouterProvider } from "react-router";
import { Router } from "./Router";
import { QueryProvider } from "./lib/queryProvider";

function App() {
  return (
    <>
      <QueryProvider>
        <RouterProvider router={Router} />
      </QueryProvider>
    </>
  );
}

export default App;
