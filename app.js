
/* =======================================================================
                              CHAPTER # 17-20
======================================================================== */


//  Task  (01)

var multiArrEmpty = [
    [],
    []
]



//  Task (02)

var multiArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]



//  Task (03)

for (var i = 1; i <= 10; i++) {
    document.write(i + " <br>")
}



//  Task (4)

var table = +prompt("Please enter table number")
var length = +prompt("Please enter length of table")

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>")
}


//  Task (5)

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}



//  Task (6)



// Section (A)

document.write(" <h2>a. Counting: </h2>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ",")

}


// Section (B)

document.write(" <h2>b. Reverse Counting: </h2> ")
for (var i = 10; i >= 1; i--) {
    document.write(i + ",")
}


// Section (C)

document.write(" <h2>c. Even</h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",")
}


// Section (D)

document.write(" <h2>d. odd </h2>")
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i +",")
}


// Section (E)

document.write("<h2>e. Series </h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + "K,")
}



//  Task (07)

alert("Welcome to our bakery")
var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcome! What you want?")
var isFound = false //this is called flag

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}



//  Task (8)

var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort()
console.log("The largest number is: " + A[A.length - 1])



//  Task  (9)

var b = [24, 53, 78, 91, 12]

console.log("Array items: " + b)
b = b.sort().reverse()
console.log("The smallest number is: " + b[b.length - 1])



//  Task  (10)

document.write("<h2>5 Ranging</h2>")
for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + ",")
}

// /* ==========================================================================================
//                               CHAPTER # 21 - 25 === "STRING METHODS"
// =============================================================================================*/



// Question (01)

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName + " " + lastName
alert("Your Full name is: ' " + fullName + " '");


// Question(02)

var favMobile = prompt('Enter your Favorite mobile phone model');
document.write('My favorite phone is:' + ' ' + favMobile + ' ' + ',' + 'length of string:' + favMobile.length);
 

// Question (03)

var pakistan = "Pakistani"
var letterIndex = pakistan.indexOf('n')
document.write("String: " + pakistan + "<BR> Index of 'n': " + letterIndex);



// Question (04)

var word = "Hello world";
var letterIndex = word.lastIndexOf('l');
document.write("String: " + word + "<BR> Last Index of 'l': " + letterIndex);



// Question (05)

var pak = "Pakistani";
var character = pak.charAt(3);
document.write("String: " + pak + "<BR> Charactor at Index of '3': " + character);



// Question (06)

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(' ' + lastName);
alert("Your Full name is: ' " + fullName + " '");



// Question (07)

var city = "Hyderabad";

var replace = city.replace('Hyder', 'Islam');

document.write("City: ", city, "<BR> After replacement: ", replace );


// QUestion (08)

var message = " “Ali and Sami are best friends. They play cricket and football together.” "
message.split("and").join("&")


// Question (09)

var word1 = "472"
document.write("Value: " + word1 + "<BR>" + "Type: " + typeof (word1) + "<BR>" + "Value: ", word1 = +word1, "<BR>" + "Type: " + typeof (word1), )


// Question (10)

var a = "peanuts"
var upper = a.toUpperCase()
document.write("User input: ", a, "<BR>", "Upper case: ", upper)


// Quesiton (11)

var input = prompt("Enter your name");
var firstLetter =  input[0].toUpperCase();
document.write(firstLetter + input.slice(1));


// Quesiton (12)

var num = prompt('Enter Dotted Number')
var result = num.split('.').join("")
document.write("Number: " , num , "<BR> Result: " , result )


// Question (13)

var name = prompt("Enter your name");;
name = name.toLocaleLowerCase()
var check = false

for (i = 0; i < name.length; i++) {
    if (name.slice(i, i + 1).charCodeAt() == 33 || name.slice(i, i + 1).charCodeAt() == 44  || name.slice(i, i + 1).charCodeAt() == 46 || name.slice(i, i + 1).charCodeAt() == 64 ) {
        check = true;
    } else {
        check = false;
    }
}

if (check == true) {
    alert("please enter a correct user name")
} else {
    name
}


// Question (14)

alert("Welcome To ABC Bakery");

var item = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcome to ABC Bakery! What you want to order sir/ma'am?")
var isFound = false //this is called flag
inputCart = inputCart.toLocaleLowerCase()

for (i = 0; i < item.length; i++) {
    if (inputCart === item[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale in our bakery");
}



// Question (15)

var str = prompt();
var flag = 0
var count = 0
var ceck = +str.slice(0, 1)

if (ceck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < str.length; i++) {
        var cc = +str.slice(i, i + 1)
        if (cc.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == str.length) {
    alert("password does not meet above requirements")
} else {
    console.log("ok")
}


// Question (16)

var university = "University of Karachi";
var uni = university.split("")

for (i = 0; i < uni.length; i++) {
    document.write(uni[i] , "<BR>" );
}


// Question (17)

var userInput = prompt();
var checkLastInput = userInput.slice(userInput.length - 1);
document.write("User input " + userInput +"<BR>" + "Last character of input: " + checkLastInput)


// Question (18)

var b = "The quick brown fox jumps over the lazy dog";
var flag = 0;
var checked = "the "
var textcheck = b.toLocaleLowerCase()

for (i = 0; i < textcheck.length; i++) {
    dd = textcheck.slice(i, (checked.length) + i)

    if (checked == dd) {
        flag++
    }
}

document.write(b + "<BR> there are " + flag + " occurrence(s) of world 'the'")





// /* =====================================================================
//                      CHAPTER 26 - 30 == "MATH METHODS"
// ========================================================================*/


// Question (01)

var user = +prompt("Enter a Positive  Integer Number");
document.write("Number: " + user + "<BR>");
document.write("round off value: " + Math.round(user)+ "<BR>")
document.write("floor value: " + Math.floor(user)+ "<BR>")
document.write("ceil value: " + Math.ceil(user)+ "<BR>")



// Question (02)


var user1 = +prompt("Enter a Negative Floating Numbers");

document.write("Number: " + user1 + "<BR>");
document.write("round off value: " + Math.round(user1) + "<BR>");
document.write("floor value: " + Math.floor(user1) + "<BR>");
document.write("ceil value: " + Math.ceil(user1) + "<BR>");


// Question (03)

var userInput1 = +prompt("Enter a  Absolute value Number");

document.write("The Absolute value of: " + userInput1 + " is " + Math.abs(userInput1))


// Question (04)

var dice = Math.floor(6 * Math.random() + 1);

document.write("Random dice value: " + dice);



// Question (05)

var coin = Math.floor(2 * Math.random() + 1);

if (coin === 2) {
    alert(coin + " Random coin value: Head");
} else if (coin === 1) {
    alert(coin + " Random coin value: Tail");
}


// Question (06)

var random = Math.floor(100 * Math.random() + 1);

document.write("Random number between 1 and 100: " + random);



// Question (07)

var kg = prompt("Enter your weight")
kg = kg.toLowerCase()
var weight = kg.split("k")

Document.write("the weight of user is " + weight[0] + " Kilograms");


// Question (08)

var secretNum = Math.floor(Math.random() * 10);
var numInput = +prompt("Enter a number between 1 and 10");

if (numInput === secretNum) {
    alert("Congratulations!");
} else {
    alert("Please try again");
}


