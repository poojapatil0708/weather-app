import { Cloud } from "./icon";

const Weather = ({ weather }) => {
    return (
        <div className="d-flex flex-column align-items-center my-3">
            <Cloud />
            <div className="d-flex flex-column align-items-center my-3 fw-bold">
                <div className="fs-1">{weather.location.name}</div>
                <div className="fs-5">{weather.location.region}</div>
                <span>{weather.current.temp_c}&#8451;</span>
                <span>{weather.current.condition.text}</span>
            </div>
        </div>
    );
}

export default Weather;