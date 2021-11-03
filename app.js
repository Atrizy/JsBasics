var userAge = 17;
var is_subscribed = true;

if (userAge >= 18 && is_subscribed === true){
    console.log("The user is 18 and subscribed!")
} else if(userAge >=18 && is_subscribed === false) {
    console.log("This is under 18 and not subscribed")
} else if(userAge <=17 && is_subscribed === true) {
    console.log("This user is under 18 and is subscribed")
} else if(userAge <=17 && is_subscribed === false) {
    console.log("This user is under 18 and is not subscribed")
}