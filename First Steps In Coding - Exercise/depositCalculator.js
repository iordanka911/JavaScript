function depositCalculator(input){
    let depositSum=Number(input[0]);
    let timeOfDepositInMonths=Number(input[1]);
    let yearsInterestPercent=Number(input[2]);
    let sum=depositSum+timeOfDepositInMonths*((depositSum*yearsInterestPercent/100)/12);
    console.log(`${sum}`);
}

depositCalculator(["200", "3", "5.7"])