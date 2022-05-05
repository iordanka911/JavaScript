function zoo(input){
    let numberOfPacksForDogs=input[0];
    let numberOfPacksForCats=input[1];
    let sumOfAllPacksForDogs=numberOfPacksForDogs*2.50;
    let sumOfAllPacksforCats=numberOfPacksForCats*4;
    let finalSum=sumOfAllPacksForDogs+sumOfAllPacksforCats;
    console.log(`${finalSum} lv.`)
}

zoo(["5","4"]);