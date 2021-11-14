import React, { useState } from "react";
import WeatherCircle from "./WeatherCircle";
import style from "./WeatherApp.css"
/**
 * Useing Yr API to fetch wetherdata and build a weather app with additional clothing suggestions
 * 
 */

function WeatherApp(){

    let [weatherData, setWeatherData] = useState();

  React.useEffect(async() =>{
    let responce = await fetch("https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=60.397076&lon=5.324383");
    let y = await responce.json();
    setWeatherData(y);
    console.log(y);
    }, [] );
  
    if(weatherData){
        let weatherIcon = `WeatherApp/weathericon/svg/${weatherData.properties.timeseries[0].data.next_1_hours.summary.symbol_code}.svg`;
        let windIndex = `rotate(${weatherData.properties.timeseries[0].data.instant.details.wind_from_direction}deg)`;
        let topHalfColor = "red";
        let bottomHalfColor = "green";
        let date = new Date();
        let month = date.getMonth();
        let weatherClothes = "WeatherApp/Weather-body-rain-jacket.png";
        let suggestion = "oops";

        //Setting the sky color
        if(weatherIcon.includes('_day') && (weatherData.properties.timeseries[0].data.instant.details.cloud_area_fraction >= 50 || 
        weatherData.properties.timeseries[0].data.instant.details.fog_area_fraction >= 30 )) {
                topHalfColor="darkgrey";
        }
        else if(weatherIcon.includes('_night')|| weatherIcon.includes('_polartwilight')){
            topHalfColor="#03021f";
        }
        else{
            topHalfColor="#448ee4";
        }

        //Setting the ground color
       if(weatherIcon.includes('snow')||weatherIcon.includes('sleet')){
            bottomHalfColor = "#d6fffa";
       }
       else if(month == 2 || month == 3 || month == 4){
            bottomHalfColor = "#089404";
       }
       else if(month == 5 || month == 6 || month == 7){
        
            bottomHalfColor = "#06470c";
       }
       else if(month == 8 ||month == 9){
            bottomHalfColor = " #c45508";
       }

       else if(month == 10 || month == 11){
           bottomHalfColor = "#86a17d";
       }
       else if(month == 0 || month== 1){
           bottomHalfColor = "#696112";
       }
       else{
           bottomHalfColor = "#86a17d";
       }
      

       //illustrating the clothing
       if(weatherData.properties.timeseries[0].data.instant.details.air_temperature <=7 ||
        (weatherIcon.includes('snow')||weatherIcon.includes('sleet')||weatherIcon.includes('thunder'))){
            weatherClothes = "WeatherApp/Weather-body-warm-clothes.png";
       }
        else if((weatherIcon.includes('thunder')|| weatherIcon.includes('heavy')) && 
        weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_min >0 &&
        weatherData.properties.timeseries[0].data.instant.details.wind_speed_of_gust>=15){
            weatherClothes = "WeatherApp/Weather-body-rain-jacket.png";
         }
        
        else if(weatherData.properties.timeseries[0].data.instant.details.air_temperature >=17 && 
        weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_min >0){
                weatherClothes = "WeatherApp/Weather-body-light-clothes-with-umbrella.png";
            }
        else if(weatherData.properties.timeseries[0].data.instant.details.air_temperature >=17 && 
        weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_min ==0){
            weatherClothes = "WeatherApp/Weather-body-light-clothes.png";
        }
        else if(weatherData.properties.timeseries[0].data.instant.details.air_temperature >=10 && 
        weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_min >0){
                weatherClothes = "WeatherApp/Weather-body-light-jacket-and-jeans-with-umbrella.png";
            }
        else if(weatherData.properties.timeseries[0].data.instant.details.air_temperature >=10 && 
        weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_min == 0){
            weatherClothes = "WeatherApp/Weather-body-light-jacket-and-jeans.png";
        }
        else{
            weatherClothes = "WeatherApp/Weather-body-light-jacket-and-jeans.png";
        } 

        
        //making a clothing suggestion
         
        if(weatherClothes.includes('WeatherApp/Weather-body-warm-clothes') && 
        weatherData.properties.timeseries[0].data.instant.details.air_temperature <=0 ){
            suggestion = "Please put on some warm clothes and grippy shoes before leaving the house.";
        }
        else if(weatherClothes.includes('WeatherApp/Weather-body-warm-clothes') && 
        weatherData.properties.timeseries[0].data.instant.details.air_temperature >0 ){
            suggestion = "Please put on some warm clothes before leaving the house.";
        }
        else if (weatherClothes.includes('WeatherApp/Weather-body-rain-jacket') && (weatherIcon.includes('thunder')||
        weatherData.properties.timeseries[0].data.instant.details.wind_speed_of_gust>=15)){
            suggestion ="Please put on a rain coat and some waterproof shoes before leaving the house. And don't even think about bringing an umbrella.";
        }
        else if (weatherClothes.includes('WeatherApp/Weather-body-rain-jacket')){
            suggestion ="Please put on a rain coat and some waterproof shoes before leaving the house.";
        }
        else if (weatherClothes.includes('WeatherApp/Weather-body-light-clothes') && 
        (weatherIcon.includes('clearsky_day')||weatherIcon.includes('fair_day')||weatherIcon.includes('partlycloudy_day'))){
            suggestion = "Please put on some light clothes and sandals. And use sun lotion 30-50SPF.";
        }
        else if (weatherClothes.includes('WeatherApp/Weather-body-light-clothes')){
            suggestion = "Please put on some light clothes and light shoes.";
        }
        else if(weatherClothes.includes('WeatherApp/Weather-body-light-clothes-with-umbrella')){
        suggestion = "Please put on some light clothes and light shoes. And bring an umbrella";
        }
        else if(weatherClothes.includes('WeatherApp/Weather-body-light-jacket-and-jeans"')){
            suggestion = "Please put on some thousers, a light jacket and wear comfortable shoes.";
        }
        else if(weatherClothes.includes('WeatherApp/Weather-body-light-jacket-and-jeans-with-umbrella')){
            suggestion = "Please put on some thousers, a light jacket and wear comfortable shoes. And bring an umbrella.";
        }

        else{
            suggestion ="...dress however you want...";
        }



        return(
            <>
                <h1>The weather in Bergen</h1>

                <div className="FigureOverlayWrap">
                    <img src={weatherIcon} className="icon" alt=""/>
                    <img className="person" src={weatherClothes} alt="" />
                    <div className="windIndex" style={{transform: windIndex}}>&darr;</div>
                    <div className="rightinformation-first">{weatherData.properties.timeseries[0].data.instant.details.air_temperature}&deg;C</div>
                    <div className="rightinformation">{weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_min}-{weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_max}mm</div>
                    <WeatherCircle topHalfColor={topHalfColor} bottomHalfColor={bottomHalfColor}/>
                    <div className="leftinformation">{weatherData.properties.timeseries[0].data.instant.details.wind_speed}m/s</div>
                </div>
                
                <h2>Suggested clothing:</h2>
                <div className="suggestions" >
                    <section>
                    It is {weatherData.properties.timeseries[0].data.instant.details.air_temperature}&deg;C outside and it's expected a precipitation between {weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_min}-{weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount_max}mm the next hour.
                    The windspeed is {weatherData.properties.timeseries[0].data.instant.details.wind_speed}m/s.
                    </section>
                    <section>
                    {suggestion}
                    </section>
                </div>


            </>
            
        
            );
        }
            
    return "Loading...";


}

export default WeatherApp;