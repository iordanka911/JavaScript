function yardGreening(input){
    let squareMetersToBeGreening=Number(input[0]);
    let sum=squareMetersToBeGreening*7.61;
    let discount=sum*0.18;
    let finalSum=sum-discount;
    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"]);