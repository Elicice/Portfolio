import style from "./WeatherCircle.css";



function WeatherCircle({topHalfColor, bottomHalfColor}){

    return(
    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 530 530">
        <path class="circle-bottom-half" style={{fill:bottomHalfColor}} d="M525,265c0,143.59-116.41,260-260,260c-116.98,0-215.91-77.26-248.57-183.53c1.9-66.18,86.08-50.76,187.8-34.25
            c115.9,18.81,254.57,39.05,320.27-58.4C524.83,254.18,525,259.57,525,265z"/>
        <path class="circle-top-half" style={{fill:topHalfColor}} d="M524.5,248.82c-65.7,97.45-204.37,77.22-320.27,58.4c-101.72-16.51-185.9-31.93-187.8,34.25
            C9,317.3,5,291.62,5,265C5,121.41,121.41,5,265,5C403.16,5,516.16,112.77,524.5,248.82z"/>
    </svg>
    );
}


export default WeatherCircle;