import React from "react"; import ReactDOM from "react-dom";
import BinaryClock from './projects/klokke-app/BinaryClock';
import style from "./projectBinaryClock.css";

function ProjectBinaryClock(){
    return(
        <div className="presentContent">
            <div >
                <h1>Binary Clock</h1>
            </div>
            <div className="clock">
                <BinaryClock />
            </div>

            <div className="project-description">
                <h3>
                    What it is
                </h3>
                <section>
                    This binary clock is made with React.js. 
                    The source code can be accessed at <a href="https://github.com/Elicice/Portfolio/tree/main/src/projects/klokke-app">GitHub</a>.

                </section>
                <h3>
                    How it works
                </h3>
                <section>
                    As seen in the image below, the clock can be read as a digital clock from left to right. where the hours is the two first columns, 
                    minutes is the two columns in the middle, and seconds is the two columns to the right.
                     
                </section>
                <section>
                    <img src="./BinaryClockExplainedDetails.png" alt="Binary clock with the words 'hours', 'minutes', and'seconds' on top of each two columns, and first column has the numbers 8, 4, 2, and 1 in the circles from the top." className="clockExplained"/>
                </section>
                <section>
                    The bottom row is the 1 placeholder, the next 2, then 4, and the top row is 8 placeholder. Blue indicates active placeholder. 
                    
                </section>
            </div>
        </div>
        
    ) ;
}
export default ProjectBinaryClock;
