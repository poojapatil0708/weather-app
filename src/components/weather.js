const Weather = ({ weather }) => {
    return (
        <div className="d-flex flex-column align-items-center my-3" >
            <div className="d-flex flex-column align-items-center my-3 fw-bold text-light">
                <img style={{height:'150px', width:'150px'}} src={weather.current.condition.icon} alt="weather"/>
                <div className="fs-1 ">{weather.location.name}</div>
                <div className="fs-5">{weather.location.region}</div>
                <span style={{fontSize:'45px'}}>{weather.current.temp_c}&#8451;</span>
                <span className="fs-5">{weather.current.condition.text}</span>
            </div>
        </div>
    );
}
// style={{backgroundImage: `url('https://picsum.photos/id/10/2500/1667')`}}
export default Weather;