import CircleStack from "./CircleStack";
import React from "react";
import { useState } from 'react';
import style from "./BinaryClock.css";

function BinaryClock(props){
    let [now, setState] = useState(new Date());
    let nowHour = now.getHours().toString().padStart(2).split("");
    let nowMinute = now.getMinutes().toString().padStart(2).split("");
    let nowSecond = now.getSeconds().toString().padStart(2).split(""); 

    React.useEffect(() =>{
        setInterval(() => {
            setState(new Date());
        }, 100);
    }, [] );
  
    return (
        <div>
            <div className="Time-Teller-Backgorund">   
                <CircleStack value={nowHour[0]} />
                
                <CircleStack value={nowHour[1]} />
                
                <CircleStack value={nowMinute[0]} />

                <CircleStack value={nowMinute[1]} />

                <CircleStack value={nowSecond[0]} />
                
                <CircleStack value={nowSecond[1]} />
            </div>
        </div>);
}

export default BinaryClock;