import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes";
import { Suspense } from "react";
import Loader from "./components/Loader";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={route} />
      </Suspense>
    </div>
  );
}

export default App;
