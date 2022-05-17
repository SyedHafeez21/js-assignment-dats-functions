//   Ch: dates methods 31-34


// Q:1. Write a program that displays current date and time in
// your browser.

// var currTime= new Date()

// document.write("<h2> Current Time </h2>")

// document.write("<h3>"+ currTime + "</h3>")


// Q:2 Write a program that alerts the current month in words.
// For example December.

// var currTime = new Date()

// var getMonth = currTime.getMonth()

// var monthNames= ['January','February','March','April','May','June','July','August','September','October','November','December']

// var monthByName = monthNames[getMonth]

// document.write("<h3> Current Month : "+ monthByName + "</h3>")


// Q:3 Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var currTime = new Date()

// var getDay= currTime.getDay()

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// var dayByName= dayNames[getDay]

// document.write("<h2> Current Day : "+ dayByName + "</h2>")


//  Q: 4 Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currTime = new Date()

// var getDay= currTime.getDay()

// if(getDay == 0 || getDay == 6){
    
//  document.write("<h2> Its Fun Day </h2>")

// }
// else{

//  document.write("<h2> Just Waiting For Weekend</h2>")

// }


// Q: 5 Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var currTime= new Date()

// var getDate= currTime.getDate()

// if(getDate < 15 ){
//     document.write("<h2> First fifteen days of the month </h2>")
    
// }
// else{
//    document.write("<h2> Last days of the month </h2>")

// }



// Q: 6 Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var currTime= new Date()

// var elapMilliSec= currTime.getTime()

// var elapMinutes = elapMilliSec / (1000 * 60 )

// document.write("<h2> Current Date : " + currTime + "<h2>")

// document.write("<h2> Elapsed Milliseconds since january 1 , 1970 : "+ elapMilliSec +" </h2>")

// document.write("<h2> Elapsed Minutes since january 1 , 1970 : "+ elapMinutes +" </h2>")



// Q: 7 Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var currTime= new Date()

// var getHour= currTime.getHours()  

// if(getHour < 11){
//     console.log("its Am")

// }
// else{
//   console.log("Its PM")

// }


// Q:8 Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var newDate= new Date("Dec 31 , 2022")

// document.write("<h2>"+newDate+"</h2>")


// Q: 9 Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var oldDate = new Date("June 18 , 2015")

// var currTime = new Date()

// var CurrDiff = currTime - oldDate 

// var Diff= CurrDiff / (1000 * 60 * 60 * 24)

// var Days = Math.floor(Diff)

// document.write("<h3>"+Days+" days have passed since 1st Ramadan , 2015")


// Q:10 Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var oldDate = new Date("Jan 1, 2022")

// var currTime = new Date()

// var CurrDiff = currTime - oldDate 

// var Diff= CurrDiff / 1000 

// var Sec = Math.floor(Diff)

// document.write("<h3> On Reference date "+ currTime)

// document.write("<h3>"+Sec+" Seconds have passed since beginning of 2015")



// Q: 12 Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var time= new Date()

// var changingTime = new Date()

// var date = changingTime.setFullYear(changingTime.getFullYear() - 100 )

// document.write("<h2> On Reference date "+ time +"</h2>")

// document.write("<h2> 100 years back , it was "+ changingTime +"</h2>")


// Q: 13 Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var currTime= new Date()

// var getYear= currTime.getFullYear()

// var userAge= +prompt("Enter Your age in Numbers" , "Enter your Age")p

// var userBirth=getYear - userAge


// document.write("<h2> Your Age is "+ userAge +"</h2>")

// document.write("<h2>Your Birth Year is "+ userBirth +"</h2>")



// ch: js functions 35-38


// Q :1 Write a function that displays current date & time in your
// browser.

// var currTime = new Date()

// document.write("<h2>" + currTime+ "</h2>")


// Q: 2 Write a function that takes first & last name and then it
// greets the user using his full name.

// var firstName=prompt("Enter your First Name")

// var lastName=prompt("Enter your Last Name")

// function fullname(firstName = "" , lastName = ""){

//    var combinenames = firstName+ " " + lastName 

// var name = fullname(firstName , lastName)

// alert("Hey "+name)


// Q: 3 Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// var sum1=+prompt("Enter 1st Num")

// var sum2=+prompt("Enter 2nd Num")

// function plus(sum1 = 0 , sum2 = 0){

//    var add = sum1 + sum2 

//    return add ;

// var sum = plus(sum1 , sum2)

// alert(sum1 +" + "+ sum2 + " = " + sum)



// Q : 5. Write a function that squares its argument.

// var num=+prompt("Enter a Number to get its squares")

// function squares(num){

//     var sum = num * num

//     return sum ;

// var sqRoot= squares(num)

// alert("Squares of " + num + " is " + sqRoot)


// Q 6 Write a function that computes factorial of a number.

// var num=+prompt("Enter a Number to get its factorial")

// function factorial(num) {

//     if (num === 0 || num === 1)

//         return 1;

//     for (var i = num - 1; i >= 1; i--) {

//         num = num * i ;

//     }

//     return num;

// var answer= factorialize(num)

// alert("Factor of " + num + " is " + answer)


// Q : 7 Write a function that take start and end number as inputs
// & display counting in your browser.

// var num=+prompt("Enter a Number to Start Counting with")

// var last=+prompt("Enter a Number to Stop counting with")

// function counter(num , last){

// for(i = num ; i <= last ; i++){

//     document.write(i + "<br>")

// var count=counter(num , last)



// Q:8 Write a JavaScript function that checks whether a passed
// string is palindrome or not?


// var text = "the quick brown fox"

// var sepe= text.split(" ")

// var newArray = []

// var work = null

// var work2 = null

// function capitilaize(sepe){

//     for(var i = 0 ; i < sepe.length ; i++){

//         work = sepe[i].charAt(0).toUpperCase()
//         work2= work + sepe[i].slice(1)

//         newArray.push(work2)
//     }

//     return newArray.join(" ") ;

// }

// var answer=capitilaize(sepe)

// document.write("<h3>" + text +"</h3>")

// document.write("<h3>" + answer +"</h3>")



// Q: 9 9. Write a function that calculates the area of a rectangle.

// var width=+prompt("Enter Width of Rectangle")

// var height=+prompt("Enter Height of Rectangle")

// function calculate(width , height){

//     A= width * height

//     return A ;

// var rectangle=calculate(width , height)

// alert("Area of Rectangle is "+rectangle)









