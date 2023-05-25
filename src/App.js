import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./router";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <ApplicationRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
