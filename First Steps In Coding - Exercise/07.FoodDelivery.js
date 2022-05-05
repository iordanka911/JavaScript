function foodDelivery(input){
   let numberOfChickenMenus=Number(input[0]);
   let numberOfFishMenus=Number(input[1]);
   let numberOfVegeterianMenu=Number(input[2]);

   let sumPriceOfMenus=numberOfChickenMenus*10.35+numberOfFishMenus*12.40+numberOfVegeterianMenu*8.15;
   let priceOfDessert=sumPriceOfMenus*0.20;
   let priceForDelivery=2.50;
   let finalPriceForDelivery=sumPriceOfMenus+priceOfDessert+priceForDelivery;
   console.log(finalPriceForDelivery);
}

foodDelivery(
    ["2 ",
    "4 ",
    "3 "]
)