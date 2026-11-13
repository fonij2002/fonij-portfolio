import { ThemeProvider } from "@/contexts";
import router from "@/lib/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
