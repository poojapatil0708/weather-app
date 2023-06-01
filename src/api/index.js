import axios from "axios"

const getWeather = (latitude, longitude) => {
    return axios({
        method: 'GET', url: `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`,
        headers: {
            'X-RapidAPI-Key': '74975e1f3cmsh98239145a20c6c7p1411cbjsn03f1f0225a7e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    })
        .then(response => response.data)
        .catch(err => { throw err })
}

export default getWeather;