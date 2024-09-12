// javascript e protite if statement check kore....
// syntax: if(condition){}....
// if = 1st condition
// else if = 2nd conditon
//isNaN= jodi value number na hoy tobe aita use korte hobe

let user = parseInt(prompt("Enter a number"));



if (isNaN (user)){
    document.write("You can write only number");
}else if (user % 2 == 0){
    document.write("The number is " + " "+ user +" "+"ODD")
}else{
    document.write("The number is" + " " + user + " " + "EVEN" )
} 

