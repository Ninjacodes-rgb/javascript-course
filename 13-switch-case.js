/*let day = 8 ;

switch (day) {
    case 1:
        console.log("It's Monday, time to start the week!");
        break;
    case 2:
        console.log("It's Tuesday, keep going!");
        break;
    case 3:
        console.log("It's Wednesday, we're halfway through!");
        break;
    case 4:
        console.log("It's Thursday, almost the weekend!");
        break;
    case 5:
        console.log("It's Friday, the weekend is near!");
        break;
    case 6:
        console.log("It's Saturday, enjoy your day off!");
        break;
    case 7:
        console.log("It's Sunday, relax and prepare for the week ahead!");
        break;
    default:
        console.log(`${day} Invalid day, please enter a number between 1 and 7.`);
        break;
}
*/
let testScore =92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;

  
    case testScore >= 80:
        letterGrade = "B";
        break;

    case testScore >= 70:
        letterGrade = "C";
        break;

    case testScore >= 60:
        letterGrade = "D";
        break;

    default:
        letterGrade = "F";
        break;
    
}
console.log(letterGrade);