function repainting(input){
    let neededNylon=Number(input[0]);
    let neededPaint=Number(input[1]);
    let quantityDeviderInLiters=Number(input[2]);
    let hoursForWork=Number(input[3]);
    let sumForNylon=(neededNylon+2)*1.5;
    let sumForPaint=(neededPaint+0.10*neededPaint)*14.50;
    let sumForDevider=(quantityDeviderInLiters*5);
    let sumMaterials=sumForNylon+sumForPaint+sumForDevider+0.40;
    let sumForWorkPerHour=sumMaterials*0.30;
    let sumForWorkers=sumForWorkPerHour*hoursForWork;
    let finalSum=sumForWorkers+sumMaterials;
    console.log(finalSum);
}

repainting(
    ["10 ",
    "11 ",
    "4 ",
    "8 "]
)