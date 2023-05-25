import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "../components/weather";
import DropDown from "../components/dropdown";
import { Country, State, City }  from 'country-state-city';

const DisplayWeather = () => {

    const [weather, setWeather] = useState(null)
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null)

    useEffect(() => {
        if(city) {
            axios({
                method: 'GET', url: `https://weatherapi-com.p.rapidapi.com/current.json?q=${city.latitude},${city.longitude}`,
                headers: {
                    'X-RapidAPI-Key': '74975e1f3cmsh98239145a20c6c7p1411cbjsn03f1f0225a7e',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            })
                .then(response => setWeather(response.data))
                .catch(err => console.log(err))
        }
    }, [city])

    return (
        <div>
            <div>
                <DropDown onSelect={(item) => {
                    setCountry(item);
                    setState(null);
                    setCity(null)
                }} title='Select Country' options={Country.getAllCountries()} /> 
                {country ? <DropDown onSelect={(item) =>{
                     setState(item);
                     setCity(null)
                }} title='Select State' options={State.getStatesOfCountry(country.isoCode)} /> : null}
                {state ? <DropDown onSelect={(item) => setCity(item)} title='Select City' options={City.getCitiesOfState(country.isoCode, state.isoCode)} /> : null}
                {weather ? <Weather weather={weather} /> : null}
            </div>
        </div>
    );
}

export default DisplayWeather;