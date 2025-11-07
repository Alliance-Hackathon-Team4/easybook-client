import { useState, useEffect } from "react";
import { RouterProvider } from "react-router";
import { Router } from "./Router";
import { QueryProvider } from "./lib/queryProvider";
import { Onboarding } from "./pages";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (showOnboarding) {
    return <Onboarding />;
  }

  return (
    <>
      <QueryProvider>
        <RouterProvider router={Router} />
      </QueryProvider>
    </>
  );
}

export default App;
