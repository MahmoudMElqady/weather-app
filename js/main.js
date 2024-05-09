let search = document.getElementById("search");
let todayName = document.getElementById("todayName");
let todayDate = document.getElementById("todayDate");
let cityName = document.getElementById("cityName");
let todayTemp = document.getElementById("todayTemp");
let todayIcon = document.getElementById("todayIcon");
let todayCond = document.getElementById("todayCond");
let tomName = document.getElementById("tomName");
let tomIcon = document.getElementById("tomIcon");
let tomTemp = document.getElementById("tomTemp");
let tomTempSmall = document.getElementById("tomTempSmall");
let tomCond = document.getElementById("tomCond");
let afterName = document.getElementById("afterName");
let afterIcon = document.getElementById("afterIcon");
let afterTemp = document.getElementById("afterTemp");
let afterTempSmall = document.getElementById("afterTempSmall");
let afterCond = document.getElementById("afterCond");
let rain = document.getElementById("rain");
let wind = document.getElementById("wind");
let direction = document.getElementById("direction");
let result;
function convertdate(d) {
  if (d == 0) {
    return `Sunday`
  } else if (d == 1) {
    return `Monday`
  } else if (d == 2) {
    return `Tuesday`
  } else if (d == 3) {
    return `Wednesday`
  } else if (d == 4) {
    return `Thursday`
  } else if (d == 5) {
    return `Friday`
  } else if (d == 6) {
    return `Saturday`
  } else {
    return false
  }
}
http("cai")
search.addEventListener("keyup", function () {
  http(search.value)
});
async function http(x) {
  try {
    let data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=dbd7d90f6c7741d5adb151711231802&q=${x}&days=3&aqi=no&alerts=no`
    );
    result = await data.json();
    cityName.innerHTML = result.location.name;
    todayCond.innerHTML = result.current.condition.text;
    todayIcon.innerHTML = `<img src="${result.current.condition.icon}" alt="" />`;
    todayTemp.innerHTML = result.current.temp_c;
    todayDate.innerHTML = (result.forecast.forecastday[0].date);
    rain.innerHTML = `${result.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    wind.innerHTML = `${result.forecast.forecastday[0].day.maxwind_kph} Km/h`;
    direction.innerHTML = result.forecast.forecastday[0].hour[0].wind_dir
    //todayName.innerHTML = (result.forecast.forecastday[0].date)
    //tomName.innerHTML = result.forecast.forecastday[1].date
    tomTemp.innerHTML = result.forecast.forecastday[1].day.maxtemp_c;
    tomTempSmall.innerHTML = result.forecast.forecastday[1].day.mintemp_c;
    tomIcon.innerHTML = `<img src="${result.forecast.forecastday[1].day.condition.icon}" alt="" />`;
    tomCond.innerHTML = result.forecast.forecastday[1].day.condition.text
    //afterName.innerHTML = todayDateName;
    afterTemp.innerHTML = result.forecast.forecastday[2].day.maxtemp_c;
    afterTempSmall.innerHTML = result.forecast.forecastday[2].day.mintemp_c;
    afterIcon.innerHTML = `<img src="${result.forecast.forecastday[2].day.condition.icon}" alt="" />`;
    afterCond.innerHTML = result.forecast.forecastday[2].day.condition.text
    const dToday = new Date(`"${result.forecast.forecastday[0].date}"`);
    dToday.getDay();
    todayName.innerHTML = (convertdate(dToday.getDay()));
    const dTom = new Date(`${result.forecast.forecastday[1].date}`);
    dTom.getDay();
    tomName.innerHTML = (convertdate(dTom.getDay()));
    const dAfter = new Date(`${result.forecast.forecastday[2].date}`);
    dAfter.getDay();
    afterName.innerHTML = (convertdate(dAfter.getDay()));
    console.log(result)


  } catch (error) { }
}






