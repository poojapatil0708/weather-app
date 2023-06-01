import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
}

export default App;
