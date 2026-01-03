const input = document.querySelector("#input");
const form = document.querySelector("#form");
const container = document.querySelector("#container");

const apikey = "0430c1ed80364cdab1175420260301";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value  === "") {
        alert("please type city name!");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${input.value}&aqi=no`)
        .then(res => res.json())
        .then(res => {

           
            if (res.error) {
                alert("This city is'not availble.");
                return;
            }
container.innerHTML = `
<div class="weather-card">
    <div class="left">
        <h2 class="city">${res.location.name}</h2>
        <p class="date">${res.current.last_updated}, ${res.location.country}</p>
        <p class="condition">${res.current.condition.text}</p>
    </div>

    <div class="right">
        <img src="${res.current.condition.icon}" />
        <span class="temp">${res.current.temp_c}°</span>
    </div>
</div>
` + container.innerHTML;


            input.value = "";
        })
        .catch(err => {
            console.log(err);
        });
});
