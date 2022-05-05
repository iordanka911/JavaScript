function fishTank(input){
    let lenghtCM=Number(input[0]);
    let widthCM=Number(input[1]);
    let heightCm=Number(input[2]);
    let percent=Number(input[3]);
    let volume=lenghtCM*widthCM*heightCm;
    let volumeLiters=volume*0.001;
    let neededLiters=volumeLiters*(1-percent/100);
    console.log(neededLiters);
}

fishTank([
"85 ",
"75 ",
"47 ",
"17 "]
)