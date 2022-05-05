function materials(input){
    let numPacksPens=Number(input[0]);
    let numPacksMarkers=Number(input[1]);
    let litresCleaningDetergent=Number(input[2]);
    let discountPercent=Number(input[3]);
    let finalPrice=numPacksPens*5.80+numPacksMarkers*7.20+litresCleaningDetergent*1.20;
    let finalPriceDiscount=finalPrice-(finalPrice*discountPercent/100);
    console.log(finalPriceDiscount);
}

materials(["2", "3", "4", "25"]);