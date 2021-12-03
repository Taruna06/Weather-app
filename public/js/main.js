const cityname = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');

const getInfo=async(event)=>
{
    event.preventDefault();
    let cityVal = cityname.value;
    if(cityVal === ""){
        city_name.innerText = `Please write the name before searching`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=aa528d1e81215b30a2e8d48ca9896ce9`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            console.log(arrData[0].main.temp);
            // temp_status.innerText = arrData[0].weather[0].main;
            const tempMood = arrData[0].weather[0].main;

            //conditions
            if (tempMood == "Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>";
            }else if (tempMood=== "Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>";
            }else if (tempMood=== "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-rain' style = 'color:#a4b0be;'></i>";
            }else {
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>";
            }

            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Please write proper name`;
            datahide.classList.add('data_hide');
        }

    }
}

submitbtn.addEventListener('click',getInfo);