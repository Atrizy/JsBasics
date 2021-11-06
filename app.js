// var userAge = 17;
// var is_subscribed = true;

// if (userAge >= 18 && is_subscribed === true){
//     console.log("The user is 18 and is subscribed!")
// } else if(userAge >=18 && is_subscribed === false) {
//     console.log("This user is 18 and is not subscribed")
// } else if(userAge <=17 && is_subscribed === true) {
//     console.log("This user is under 18 and is subscribed")
// } else if(userAge <=17 && is_subscribed === false) {
//     console.log("This user is under 18 and is not subscribed")
// } else {
//     console.log("Something went wrong!")
// }



var userAge = [18,17,16,21,97,100,3,45,12,32];
var subbed = [true, false, false ,false ,true, true, false, true, false, false];

for(var i = 0; i < userAge.length; i++){
    if (userAge[i] >= 18 && subbed[i] === true){
        console.log(`The user is over 18 years old and is subbed!`)
    } else if(userAge[i] >= 18 && subbed[i] === false) {
        console.log(`The user is over 18 and is not subbed!`)
    } else if(userAge[i] < 18 && subbed[i] === true) {
        console.log(`The user is under 18 and is subbed!`)
    } else if(userAge[i] < 18 && subbed[i] === false){
        console.log(`the user is under 18 is not subbed!`)
    }
    console.log(userAge[i]);
    console.log(subbed[i]);
} 
