function areaOfFigures(input){
    let typeOfFigure=input[0];
    let sizeOfFigure=Number(input[1]);
    if(typeOfFigure=="square"){
        let areaOfSquare=sizeOfFigure*sizeOfFigure;
        console.log(areaOfSquare.toFixed(3))
    }
    else if(typeOfFigure=="rectangle"){
        let side1=Number(input[1]);
        let side2=Number(input[2]);
        let areaOfRectangle=side1*side2;
        console.log(areaOfRectangle.toFixed(3))
    }
    else if(typeOfFigure=="circle"){
        let areaOfCircle=Math.PI*sizeOfFigure*sizeOfFigure;
        console.log(areaOfCircle.toFixed(3));
    }
    else if(typeOfFigure=="triangle"){
        let heightOfSide=Number(input[1]);
        let perpendicularHeight=Number(input[2]);
        let areaOfTriangle=1/2*heightOfSide*perpendicularHeight;
        console.log(areaOfTriangle.toFixed(3));
    }
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle",
"7",
"2.5"]);



