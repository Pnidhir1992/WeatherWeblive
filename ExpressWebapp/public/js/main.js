const cityname = document.getElementById('cityname');

const submitbtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');

const temp_val = document.getElementById('temp_val');

const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.midaal-layer')

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;

const a = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = a;

const getinfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value; 

if (cityval === "") {
    city_name.innerText = `Pls Enter City Name First Then Serch`;
    datahide.classList.add('data_hide');
} else {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=50d538dfc4f715fbfb03ba71b783f84d`
        const response = await fetch(url); 
        const data = await response.json()
        const arrdata = [data];
        city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
        temp_val.innerText = arrdata[0].main.temp;
        temp_status.innerText = arrdata[0].weather[0].main;
        datahide.classList.remove('data_hide');

    } catch (error) {
        city_name.innerText = `Pls Enter City Name Properly`;
        datahide.classList.add('data_hide');
    }
       
}

}

submitbtn.addEventListener('click',getinfo) 