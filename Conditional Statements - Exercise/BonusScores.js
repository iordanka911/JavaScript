function bonusScores(input){
    let number=Number(input[0]);
    let bonusScores=0;
    if(number<=100){
        bonusScores=5;
    }
    else if(number>100){
        bonusScores=0.20*number;
    }
    else if(score>1000){
        bonusScores=0.10*number;
    }

    if(number%2==0){
        bonusScores+=1;
    }else if(number%10==5){
        bonusScores+=2;
    }
    console.log(bonusScores);
    console.log(bonusScores+number);
}

bonusScores(["20"]);