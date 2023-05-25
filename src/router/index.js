import { Route, Routes } from "react-router-dom";
import DisplayWeather from "../screens/display-weather";

const ApplicationRoutes = () => {
    return(
        <Routes>
                <Route path="/" element={<DisplayWeather/>} />
        </Routes>
    );
}

export default ApplicationRoutes;