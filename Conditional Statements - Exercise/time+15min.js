function plus15Min(input){
    let hours=Number(input[0]);
    let minutes=Number(input[1])+15;
    
    if(minutes>=60){
        minutes=minutes%60;
        hours+=1;
    }
    if(hours>23){
        hours=hours-24;
    }
    if(minutes<10){
        console.log(`${hours}:0${minutes}`);
    }
    else{
        console.log(`${hours}:${minutes}`);
    }
    
}

plus15Min((["1",

"46"]));
plus15Min(["0", "01"]);
plus15Min(["23", "59"]);