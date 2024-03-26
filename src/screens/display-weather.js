import { useEffect, useState } from "react";
import Weather from "../components/weather";
import DropDown from "../components/dropdown";
import { Country, State, City } from 'country-state-city';
import { useGeolocated } from "react-geolocated";
import getWeather from "../api";
import Loader from "../components/loader";

const DisplayWeather = () => {

    const [weather, setWeather] = useState(null)
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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
        <div>
            <div className="d-flex w-100 flex-row justify-content-center">
                <DropDown onSelect={(item) => {
                    setCountry(item);
                }} placeholder='Select Country' options={Country.getAllCountries()} />
                <DropDown isDisabled={!country} onSelect={(item) => {
                    setState(item);
                }} placeholder='Select State' disabled={!Country} options={State.getStatesOfCountry(country.isoCode)} />
                <DropDown isDisabled={!state} onSelect={(item) => setCity(item)} placeholder='Select City' options={City.getCitiesOfState(country.isoCode, state.isoCode)} />
            </div>
            <div className="d-flex justify-content-center align-items-center" >
                {isLoading ? <Loader /> : weather ? <Weather weather={weather} /> : null}
            </div>
        </div>
    );
}

export default DisplayWeather;