function basketballEquipment(input){
    let annualFee=Number(input[0]);
    let basketballSneakers=annualFee-0.40*annualFee;
    let basketballEquipment=basketballSneakers-0.20*basketballSneakers;
    let basketballBall=1/4*basketballEquipment;
    let basketballAccessoaries=1/5*basketballBall;
    let finalSum=annualFee+basketballSneakers+basketballEquipment+basketballBall+basketballAccessoaries;
    console.log(finalSum);
}

basketballEquipment(["365"])