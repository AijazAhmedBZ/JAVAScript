/*alert("AOA");
console.log("Aoa from Aijaz");
console.log("AOA via Consol");
console.log(34);

document.write("AOA via Consol");
document.write(2+8);

var age = 45;
var nationality = "Pakistani";
var feePaid = true;

alert(feePaid);
console.log(age);
console.log(feePaid);

var age = 45;
console.log(age);
var age = "Pakistani";
console.log(age);
var age = true;
console.log(age);

PROMPT
var question ="What is your name?";
var defaultAnswer = "Aijaz";
var name = prompt(question, defaultAnswer);
var question ="What is your age?";
var age = prompt(question);
console.log("Name = "+ name);
console.log("Age = "+ age);

PROMPT with parseInt
var question ="What is your name?";
var defaultAnswer = "Aijaz";
var name = prompt(question, defaultAnswer);
var age = prompt("What is your age?");
var num = 4;
var sum = parseInt(age)+ num;
console.log("Name = "+ name);
console.log("Age = "+ sum);

PROMPT with parseFloat (for converting decimal string in number)
var question ="What is your name?";
var defaultAnswer = "Aijaz";
var name = prompt(question, defaultAnswer);
var age = prompt("What is your age?");
var num = 4;
var sum = parseFloat(age)+ num;
console.log("Name = "+ name);
console.log("Age = "+ sum);

PROMPT with Number (for converting decimal string in number)
var question ="What is your name?";
var defaultAnswer = "Aijaz";
var name = prompt(question, defaultAnswer);
var age = prompt("What is your age?");
var num = 4;
var sum = Number(age) + num;
console.log("Name = "+ name);
console.log("Age = "+ sum);

Comparison operator
var a = 5;
var b = 6;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

Logical Operators
&& (AND)
var a = 60;
var b = a > 50 && a < 70;
alert (b);

var c = 80;
var d = c > 50 && c < 70;
alert (d);

Logical Operators
|| (OR)
var a = 60;
var b = a > 50 || a < 70;
console.log(b);

var c = 80;
var d = c > 50 || c < 70;
console.log(d);

Logical Operators
! (NOT)
var a = 60;
var b = a > 100;
var c = !b;
var d = !(a > 100);
var e = !true;

console.log("A = "+a);
console.log("B = "+b);
console.log("C = "+c);
console.log("D = "+d);
console.log("E = "+e);

var score = prompt("What is your score");
score = parseInt(score);
if (score > 80) {
    console.log("Grade A");
} else if (score > 70) {
    console.log("Grade B");
 } else if (score > 60) {
    console.log("Grade C");
} else {
    console.log("Failed")
}

Nested if

var score = prompt("What is your score?");
score = parseInt(score);
if (score > 80) { 
    console.log("Grade A");
 if (score > 90) {
    console.log("You win 100$")
  } 
  else if (score > 85) {
    console.log("You win 50$");}
    else {
        console.log("You win 20$");}
      } else {
console.log("Failed");
}

var score = prompt("What is your score");
score = parseInt(score);
if (score >= 80 && score <= 100) {
    console.log("Grade A");
}
else if (score >=70 && score <= 80) {
    console.log("Grade B");
}
else if (score >=60 && score <=70) {
    console.log("Grade C");
} else if (score >100) {
    console.log("Score cannot be greater then 100");
} else {
    console.log("Failed");
}

var input = prompt("Please provide input to find vowel");
if (input == "A" || input == "a" || input == "E" || input == "e" || input == "I" || input == "i" || input == "O" || input == "o" || input == "U" || input == "u") {
    console.log("It's a Vowel");
} else {
    console.log("it's a consonants");
}

var age;
if (age) {
    console.log("In if age = "+age);
}
else {
    console.log("In else age = "+age);
}

var a = 6;
var b = 8;
var c = true && 0 && "Cat";
console.log("C = "+c);var a = 6;

var b = 8;
var c = true || 0 || "Cat";
console.log("C = "+c);*/