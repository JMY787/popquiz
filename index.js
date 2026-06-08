const username = prompt("whats your name?");

alert(`welcome to your pop quiz, ${username}. click ok if your ready to start`);

let score = 0;
let response;

const answerOne = prompt(`what number comes after 5?
  [a]7
  [b]9
  [c]6`);

if (!(answerOne === "a" || answerOne === "b" || answerOne === "c")) {
  alert("please select a b or c refresh and start over");
} else {
  if (answerOne === "c") {
    score++;
    response = "correct!";
  } else {
    response = "incorrect";
  }
  alert(score + "/3" + response);
}

const answerTwo = prompt(`what number comes after 8?
  [a]7
  [b]9
  [c]6`);

if (!(answerTwo === "a" || answerTwo === "b" || answerTwo === "c")) {
  alert("please select a b or c refresh and start over");
} else {
  if (answerTwo === "b") {
    score++;
    response = "correct!";
  } else {
    response = "incorrect";
  }
  alert(score + "/3" + response);
}

const answerThree = prompt(`what number comes after 6?
  [a]7
  [b]9
  [c]6`);

if (!(answerThree === "a" || answerThree === "b" || answerThree === "c")) {
  alert("please select a b or c refresh and start over");
} else {
  if (answerThree === "a") {
    score++;
    response = "correct!";
  } else {
    response = "incorrect";
  }
  alert(score + "/3" + response);
}
