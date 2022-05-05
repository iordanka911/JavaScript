function radiansToDegrees(input){
    let angleInRadians=Number(input[0]);
    let graduses=angleInRadians*(180/Math.PI);
    console.log(graduses);
}

radiansToDegrees(["3.1416"])