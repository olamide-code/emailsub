const apiKey = "7112cbafe08d1b05949e8ce614d37b2d";
const apiUrl = " ";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =  document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else
    {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if(data.weather[0].main == "clouds")
    {
        weatherIcon.src ="clouds.png";
    }
    else if(data.weather[0].main == "clear")
    {
        weatherIcon.src ="clear.png";
    }
    
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src ="rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src ="drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src ="mist.png";
    } 
    
    document.querySelector(".weather").style.display = "block";
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
if(data.weather[0].main == "clouds")
{
    weatherIcon.src ="clouds.png";
}
else if(data.weather[0].main == "clear")
{
    weatherIcon.src ="clear.png";
}

else if(data.weather[0].main == "Rain")
{
    weatherIcon.src ="rain.png";
}
else if(data.weather[0].main == "Drizzle")
{
    weatherIcon.src ="drizzle.png";
}
else if(data.weather[0].main == "Mist")
{
    weatherIcon.src ="mist.png";
} 

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

}
 
searchBtn.addEventListener("click", ()=>
{
    checkweather(searchBox.value); 
})

checkweather();



