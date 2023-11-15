function runApp(){
    let s=prompt("Enter f or c");
    let t=Number(prompt("Enter temp:"));
    let e=Number(prompt("Enter end temp:"));
    convertTemperature(s,t);
}
function convertTemperature(scale,temp){
    let result;
    if(scale == "f"){
        result = (temp - 32) * 5/9;
        console.log(result);
        
    }else if(scale == "c"){
        result = (temp * 9/5) + 32;
        console.log(result);
    }else{
        console.log("Incorrect scale");
    }

    return result;

    for(let i=t;i<e;i++) {
        convertTemperature(s,i);
    }

}
