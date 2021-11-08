/**
 * Indicator for binary clock represented by using a circke that is either on (blue) or off (transparent).
 */

function BinaryCircle(props){
    if(props.on==1){
        return <div className="CircleOn" />;
    }
    else{
        return <div className="CircleOff" />;
    }  
}
export default BinaryCircle;