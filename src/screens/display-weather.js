import { useEffect, useState } from "react";
import Weather from "../components/weather";
import DropDown from "../components/dropdown";
import { Country, State, City } from 'country-state-city';
import { useGeolocated } from "react-geolocated";
import getWeather from "../api";
import Loader from "../components/loader";

const DisplayWeather = () => {

    const [weather, setWeather] = useState(null)
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const { coords } = useGeolocated({ positionOptions: { enableHighAccuracy: false }, userDecisionTimeout: 5000 });

    useEffect(() => {
        setIsLoading(true)
        if (coords) {
            getWeather(coords.latitude, coords.longitude)
                .then(res => {
                    setIsLoading(false)
                    setWeather(res)
                }) 
                .catch(err => {
                    setIsLoading(false)
                    console.log(err)
                }) 
        }
    }, [coords])

    useEffect(() => {
        setIsLoading(true)
        if (city) {
            getWeather(city.latitude, city.longitude)
                .then(res => {
                    setIsLoading(false)
                    setWeather(res)
                }) 
                .catch(err => {
                    setIsLoading(false)
                    console.log(err)
                })
        }
    }, [city])

    return (
        <div className="d-flex w-100 flex-column">
            <DropDown onSelect={(item) => {
                setCountry(item);
                setState(null);
                setCity(null)
            }} placeholder='Select Country' options={Country.getAllCountries()} />
            {country ? <DropDown onSelect={(item) => {
                setState(item);
                setCity(null)
            }} placeholder='Select State' options={State.getStatesOfCountry(country.isoCode)} /> : null}
            {state ? <DropDown onSelect={(item) => setCity(item)} placeholder='Select City' options={City.getCitiesOfState(country.isoCode, state.isoCode)} /> : null}
            {isLoading ? <Loader /> : weather ? <Weather weather={weather} /> : null}
        </div>
    );
}

export default DisplayWeather;