let age = 12;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You are not eligible");
}

// 2. example

let firstName = "Tarun";
let lastName = "rai";
if ((firstName == "Tarun", lastName == "rai")) {
  console.log(`Welcome ${firstName + " " + lastName}`);
} else {
  console.log("error");
}

// 3. example

let color = "green";

if (color === "red") {
  console.log("Stop");
}
if (color === "yellow") {
  console.log("go slow");
}
if (color === "green") {
  console.log("run");
}

// else if

let message = "seen";
// let message = "sent but not received";
// let message = "seen";

if (message === "sent") {
  console.log("single tick");
} else if (message === "sent but not received") {
  console.log("logo of watch");
} else if (message === "seen") {
  console.log("double blue tick");
}

// Practice Question

let size = "S";

if (size === "XL") {
  console.log("Price is Rs.250");
}else if (size === "L") {
  console.log("Price is Rs.200");
}else if (size === "M") {
  console.log("Price is Rs.100");
}else if (size === "S") {
  console.log("Price is Rs.50");
}


// Nested if else statements;

let marks = 78;

if (marks >= 33) {
  console.log("Pass");

  if (marks >= 80) {
    console.log("Grade : O");

    if (marks >= 80) {
      console.log("Grade : O+");
    } else {
      console.log("Grade : O++");
    }
  } else {
    console.log("Grade : A");
  }
} else {
  console.log("Better luck next time");
}
