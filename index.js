let score = 0;
let fail = false;
let notTrying = false;
let teacherQuit = false;
let ans1 = prompt("Will you get this question right? Please choose Yes or No");
if (ans1 === "yes") {
  alert("Somebody sure is confident.");
  alert("You're correct though.");
  alert(
    "Also I said 'Please choose Yes or No' not 'Please choose yes or no'. Capitalization matters, please put some effort in. ",
  );
  score++;
} else if (ans1 === "Yes") {
  alert("Somebody sure is confident.");
  alert("You're correct though.");
  score++;
} else if (ans1 === "No") {
  alert(
    "Nope. Maybe you'd get a better score if you had some more self confidence. Alas, not today.",
  );
} else if (ans1 === "no") {
  alert(
    "Nope. Maybe you'd get a better score if you had some more self confidence. Alas, not today.",
  );
  alert(
    "Also I said 'Please choose Yes or No' not 'Please choose yes or no'. Capitalization matters, please put some effort in. ",
  );
} else if (ans1 == "What?") {
  alert(
    "This is a quiz. I cannot help you. You lose a point for trying to cheat on this question.",
  );
  score--;
} else {
  alert("That wasn't even an answer. Rude");
  notTrying = true;
}

let ans2 = prompt(
  "Are you the same person who started taking this quiz? Please answer Yes, No, or This is a ship of Theseus paradox isn't it?.",
);
if (ans2 === "This is a ship of Theseus paradox isn't it?") {
  alert(
    "Yes this is a ship of Theseus paradox reference. Also called the broom and handle paradox. Great work.",
  );
  score++;
} else if (
  (ans1 === "yes" || ans1 === "no") &&
  (ans2 === "this is a ship of Theseus paradox isn't it?" ||
    ans2 === "this is a ship of theseus paradox isn't it?" ||
    ans2 === "This is a ship of theseus paradox isn't it?")
) {
  alert(
    "What did I say about capitalization? You lose a point for sloppy work.",
  );
  alert(
    "But you did get the question correct, so you get 0 total points on this question.",
  );
} else if (
  (ans1 === "yes" || ans1 === "no") &&
  (ans2 === "no" || ans2 === "yes")
) {
  alert("You do not understand the premise of this question do you?");
  alert(
    "The Ship of Theseus paradox is a classic philosophical thought experiment that asks: If all the original parts of an object are replaced over time, is it still the same object? It’s also called Theseus’s Paradox and has been debated for over two millennia",
  );
  alert(
    "You should know this already. You also failed to capitalize your answer. Again, after I specifically pointed it out. You lose a point for lack of attention to detail.",
  );
  score--;
} else if (ans1 != "What?" && ans2 == "What?") {
  alert(
    "This is a quiz. I cannot help you. You lose points on this question for trying to cheat.",
  );
  score--;
} else if (ans1 == "What?" && ans2 == "What?") {
  alert(
    "This is a quiz. I have made it clear I cannot help you. You know what? I don't care what you answer the next question. You fail. Hopefully this teaches you a lesson.",
  );
  fail = true;
} else if (notTrying === true) {
  alert(
    "That wasn't even an answer. You know you have to actually try to pass right? No points",
  );
} else if (
  (ans1 === "Yes" || ans1 === "No") &&
  (ans2 === "no" || ans2 === "yes")
) {
  alert("You do not understand the premise of this question do you?");
  alert(
    "The Ship of Theseus paradox is a classic philosophical thought experiment that asks: If all the original parts of an object are replaced over time, is it still the same object? It’s also called Theseus’s Paradox and has been debated for over two millennia",
  );
  alert(
    "You should know this already. You also failed to capitalize your answer, please pay attention to that. No points",
  );
} else if (ans2 === "No" || ans2 === "Yes") {
  alert("You do not understand the premise of this question do you?");
  alert(
    "The Ship of Theseus paradox is a classic philosophical thought experiment that asks: If all the original parts of an object are replaced over time, is it still the same object? It’s also called Theseus’s Paradox and has been debated for over two millennia",
  );
  alert("You should know this already. No points");
} else {
  alert("That wasn't even an answer. Rude. No points");
  notTrying = true;
}

let ans3 = prompt(
  "If this Quiz hurts your feelings so much you make a time machine and stop me from making it. Would this Quiz have ever existed in the first place? Please answer Yes, No or Nobody Knows.",
);
if (ans3 === "Nobody Knows") {
  alert(
    "Yes, this is a self referential version of the Grandfather Paradox. Great work.",
  );
  score++;
} else if (
  (ans1 === "yes" || ans1 === "no") &&
  (ans2 === "this is a ship of Theseus paradox isn't it?" ||
    ans2 === "this is a ship of theseus paradox isn't it?" ||
    ans2 === "This is a ship of theseus paradox isn't it?") &&
  (ans3 === "nobody Knows" || ans3 === "Nobody knows")
) {
  alert(
    "What did I say about capitalization?!?! This is a very simple concept and you just don't get it do you?.",
  );
  alert(
    "I don't care if you got the question correct, you lose 1 point on this question. I can't believe this. I don't even know I became a teacher at this point. I quit.",
  );
  teacherQuit = true;
} else if (
  (ans1 === "yes" || ans1 === "no") &&
  (ans2 === "no" || ans2 === "yes") &&
  (ans3 === "no" || ans3 === "yes")
) {
  alert("You do not understand the premise of this question do you?");
  alert(
    "The grandfather paradox is a time travel paradox where a person’s actions in the past could prevent their own existence, creating a logical contradiction.",
  );
  alert(
    "You should know this already. You also failed to capitalize your answer. For a third time, it's like you can't hear me. Which would explain why you keep getting everything wrong.",
  );
  score--;
} else if ((ans1 == "What?" || ans2 == "What?") && ans3 == "What?") {
  alert(
    "This is a quiz. I have made it clear I cannot help you. You know what? You fail. No next question for you. Hopefully this teaches you a lesson.",
  );
  fail = true;
} else if (ans3 == "What?") {
  alert("This is a quiz. I cannot help you. You lose a point for cheating.");
  score--;
} else if (notTrying === true) {
  alert(
    "That wasn't even an answer. You know you have to actually try to pass right? No points",
  );
} else if (
  (ans1 === "Yes" ||
    ans1 === "No" ||
    ans2 === "this is a ship of Theseus paradox isn't it?" ||
    ans2 === "this is a ship of theseus paradox isn't it?" ||
    ans2 === "This is a ship of theseus paradox isn't it?") &&
  (ans3 === "no" || ans3 === "yes")
) {
  alert("You do not understand the premise of this question do you?");
  alert(
    "The grandfather paradox is a time travel paradox where a person’s actions in the past could prevent their own existence, creating a logical contradiction.",
  );
  alert(
    "You should know this already. You also failed to capitalize your answer, please pay attention to that. No points",
  );
} else if (
  (ans1 === "Yes" ||
    ans1 === "No" ||
    ans2 === "this is a ship of Theseus paradox isn't it?" ||
    ans2 === "this is a ship of theseus paradox isn't it?" ||
    ans2 === "This is a ship of theseus paradox isn't it?" ||
    ans2 === "no" ||
    ans2 === "yes") &&
  (ans3 === "no" || ans3 === "yes")
) {
  alert("You do not understand the premise of this question do you?");
  alert(
    "The grandfather paradox is a time travel paradox where a person’s actions in the past could prevent their own existence, creating a logical contradiction.",
  );
  alert(
    "You should know this already. You also failed to capitalize your answer, please pay attention to that. No points",
  );
} else if (ans3 === "No" || ans3 === "Yes") {
  alert("You do not understand the premise of this question do you?");
  alert(
    "The grandfather paradox is a time travel paradox where a person’s actions in the past could prevent their own existence, creating a logical contradiction.",
  );
  alert("You should know this already. No points");
} else if (ans3 === "Nobody knows") {
  alert(
    "Yes, this is a self referential version of the Grandfather Paradox. Great work.",
  );
  alert(
    "Also please pay attention to capitalization. I said Please answer Yes, No or Nobody Knows. not Yes, No or Nobody knows",
  );
  score++;
} else if (ans3 === "Nobody knows") {
  alert(
    "Yes, this is a self referential version of the Grandfather Paradox. Great work.",
  );
  alert(
    "Also please pay attention to capitalization. I said Please answer Yes, No or Nobody Knows. not Yes, No or nobody Knows",
  );
  score++;
} else {
  alert("That wasn't even an answer. Rude. No points");
}

if ((score <= 0 || score >= 1) && teacherQuit === true) {
  alert(
    "If your teacher isn't there to grade your test I guess anything goes. You pass",
  );
} else if (score === 3) {
  alert("Congrats! You got everything right. Full credit.");
} else if (fail === true) {
  alert("I'm disappointed in you. Cheaters never prosper.");
} else if (score >= 1) {
  alert("Oof. Maybe study harder next time. Partial credit for trying though.");
} else if (teacherQuit === true) {
  alert(
    "If your teacher isn't there to grade your test I guess anything goes. You pass",
  );
} else if (score <= 0) {
  alert(
    "How did you get a negative score? On a pop quiz? Please get a tutor. I don't want to have to fail you again.",
  );
} else {
  alert(
    "Somebody has been asleep in class. Can't say I'm surprised. No credit.",
  );
}
