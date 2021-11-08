/**
 *Takes number between 0-9 and converts to binary number. 
 *Uses a BinaryCircle and stacks 4 blue or transparent circles according to the binary number
 */

import BinaryCircle from "./BinaryCircle";

function CircleStack(props){
    let NumberToBinary = (parseInt(props.value) >>> 0).toString(2).padStart(4);
    
    let BinaryString = NumberToBinary.split("");
    let Circles = [];
    for(let i in BinaryString){
        Circles.push(
            <BinaryCircle on={BinaryString[i]} />
        );
    }
    return <div>{Circles}</div>;

}
export default CircleStack;
