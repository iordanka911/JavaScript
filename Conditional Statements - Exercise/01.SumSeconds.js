function sumSeconds(input){
    let secunds1=Number(input[0]);
    let secunds2=Number(input[1]);
    let secunds3=Number(input[2]);
    let totalTime=secunds1+secunds2+secunds3;
    let minutes=Math.floor(totalTime/60);
    let seconds=totalTime%60;
    if(seconds<10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds(["35",

"45",

"44"]);