function BinaryCircle(props){
    if(props.on==1){
        return <div className="CircleOn" />;
    }
    else{
        return <div className="CircleOff" />;
    }  
}
export default BinaryCircle;