const apiKey = "fcc8de7015bbb202209bbf0261babf4c";
const baseUrl = "https://api.openweathermap.org/data/2.5/";
const fetchWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const iconUrl = "https://openweathermap.org/img/wn/";
const backgroundImageUrl = "https://source.unsplash.com/1600x900/?";

const featchWeather = (city) => {
    fetch(`${fetchWeatherUrl}${city}&units=metric&appid=${apiKey}`)
        .then((response) => {
            if (!response.ok) {
                alert("No Weather Data Found");
                throw new Error("No Weather Data Found");
            }
            return response.json();
        })
        .then((data) => displayData(data));
};
const displayData = (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = iconUrl + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "℃";
    document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
        backgroundImageUrl + description + "')";
};

const search = () => {
    featchWeather(document.querySelector(".search-bar").value);
};

document.querySelector(".search button").addEventListener("click", (event) => {
    search();
});

document.querySelector(".search-bar").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        search();
    }
});

featchWeather("pune");
