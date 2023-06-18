const input = document.querySelector("input");
const btn = document.querySelector("button")
const content = document.querySelector(".content")
const box = document.querySelector("#box")
const her = document.querySelector(".her")


async function myWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ba40c83bf6a7fca037dc560cddd60df0&units=metric`);
    if(response.status == 404){
        her.style.display="none"
        content.innerHTML = `<h5 class="mine">Input valid city or country</h5>`
    }
    else{
        var data = await response.json()
        console.log(data)
    
        her.style.display="block"
        if(data.weather[0].main == "Clouds"){
            box.src="clouds.png";
         }
         else if(data.weather[0].main == "Clear"){
            box.src="clear.png";
         }
         else if(data.weather[0].main == "Drizzle"){
            box.src="drizzle.png";
         }
         else if(data.weather[0].main == "Mist"){
            box.src="mist.png";
         }
         else if(data.weather[0].main == "Rain"){
            box.src="rain.png";
         }
         else if(data.weather[0].main == "Snow"){
            box.src="snow.png";
         }

       content.innerHTML = `
        <div class="card">
    
                
                <h1>${data.main.temp + "°C"}</h1>
                <h1>${data.name}</h1>
            </div> <br><br>

            <div class="cardo">
                <div class="me">
                    <div class="bark">
                    <img src="humidity.png"style="height:50px;width: 50px;"/>
                    <h4>${data.main.humidity + "%"}</h4>
                    </div>
                    <h6>humidity</h6>
                </div>

                <div class="me">
                    <div class="bark">
                    <img src="wind.png"style="height:50px;width: 50px;"/>
                    <h4>${data.wind.speed + "m/s"}</h4> 
                    </div>
                    <h6>wind speed</h6>
                </div>
            </div>`
    }
}

btn.addEventListener("click", () => {
    myWeather(input.value);
})








