function vacationBooklist(input){
    let numberPagesInCurrentBook=Number(input[0]);
    let pagesReadedForOneHour=Number(input[1]);
    let numberOfDays=Number(input[2]);
    let neededTimeForBook=numberPagesInCurrentBook/pagesReadedForOneHour;
    let neededHoursPerDay=neededTimeForBook/numberOfDays;
    console.log(neededHoursPerDay);
}

vacationBooklist(["212", "20", "2"])