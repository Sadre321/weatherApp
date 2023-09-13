let searchBox = document.querySelector('.searchBox');
let search = document.querySelector('.magnify');
let weatherIcon = document.querySelector('.weatherIcon');

let api_key ='23df3ccafa4f59dcb1c1c9fe82e03194';
let URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function getWeather (city){
    const response = await fetch(URL + city +`&appid=${api_key}`);
    
    if(response.status == 404){
        document.querySelector('.err').style.display = "block";
        document.querySelector('#weather').style.display = "none";
    }else{

        const data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
        document.querySelector('.wind').innerHTML = data.wind.speed+'km/h';

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = 'images/clouds.png'
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = 'images/clear.png'
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = 'images/rain.png'
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = 'images/drizzle.png'
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = 'images/mist.png'
        }

        document.querySelector('.err').style.display = "none";
        document.querySelector('#weather').style.display = 'block';
    }
};

search.addEventListener('click',()=>{
    getWeather(searchBox.value);
});





