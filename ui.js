class UI {
    setUI() {
        let city = document.getElementById("cityName");
        let state = document.getElementById("stateName");
        let location = document.getElementById("location");
        let skyCondition = document.getElementById("skyCondition");
        let temp = document.getElementById("temp");
        let skyIcon = document.getElementById("skyIcon");
        let weatherParams = document.getElementById("weatherParams");
        let api_id = "enter the api key";
        let wdata = new weatherData(api_id, city.value, state.value);
        location.innerHTML = `${city.value},${state.value}`;
        wdata.getdata().then((dataJson) => {
            // setting the sky condition desp
            skyCondition.innerHTML = dataJson.data[0].weather.description;
            // display temp
            temp.innerHTML = `${dataJson.data[0].temp} <span> &#176; </span>C (${(((dataJson.data[0].temp) * 1.8) + 32).toFixed(2)} <span> &#176; </span>F)`;
            // sky icon
            let image_url = `https://www.weatherbit.io/static/img/icons/${dataJson.data[0].weather.icon}.png`;
            skyIcon.setAttribute("src",`${image_url}`);
            skyIcon.setAttribute("alt","SKY ICON");
            skyIcon.style.height = "50px";
            skyIcon.style.width = "50px";
            // other weather params
            weatherParams.children[0].innerHTML = `Relative Humidity : ${dataJson.data[0].rh} %`;
            weatherParams.children[1].innerHTML = `Dew Point : ${dataJson.data[0].dewpt} <span> &#176; </span>C (${(((dataJson.data[0].dewpt) * 1.8) + 32).toFixed(2)} <span> &#176; </span>F)`;
            weatherParams.children[2].innerHTML = `Feel Like : ${dataJson.data[0].app_temp} <span> &#176; </span>C (${(((dataJson.data[0].app_temp) * 1.8) + 32).toFixed(2)} <span> &#176; </span>F)`;
            weatherParams.children[3].innerHTML = `Wind speed is ${dataJson.data[0].wind_spd} m/s`;
        });
    }
}