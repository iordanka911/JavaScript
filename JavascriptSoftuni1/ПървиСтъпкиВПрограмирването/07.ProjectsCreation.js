function projectsCreation(input){
    let nameOfThearchitect=input[0];
    let numberOfProjectsShouldCreate=Number(input[1]);
    let neededHours=numberOfProjectsShouldCreate*3;
    console.log(`The architect ${nameOfThearchitect} will need ${neededHours} hours to complete ${numberOfProjectsShouldCreate} project/s.`);
}

projectsCreation(["George",4])