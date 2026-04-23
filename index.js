// Iteration 1: Names and Input
const hacker1 = "Gonzalo";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Mayhem";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name it has ${hacker2.length} characters.`,
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}
// Iteration 3: Loops

//1
for (let i = 0; i < hacker1.length; i++) {
  console.log(`${hacker1[i].toUpperCase()} `);
}

//2
for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(`${hacker2[i]}`);
}

//3
for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else {
  }
}
if (hacker1.length === hacker2.length) {
  console.log("What?! You both have the same name?");
} else if (hacker1.length < hacker2.length) {
  console.log("The driver's name goes first.");
} else {
  console.log("Yo, the navigator goes first, definitely.");
}

//Bonus1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, purus in ultricies pellentesque, sem ex vestibulum dui, eget blandit urna orci sed diam. In mattis volutpat odio, eu pellentesque eros. Mauris quis venenatis felis. Quisque porta id turpis et faucibus. Aliquam vel hendrerit mi. Nulla lobortis vitae mi sed efficitur. Vivamus eget ante tristique, posuere dolor quis, pulvinar nisi. Duis mauris mauris, molestie ut rutrum non, tempus at ligula. Mauris lacinia, mi nec faucibus rhoncus, tellus urna eleifend nulla, eget cursus magna nulla ut tellus. Sed lacinia dolor et erat blandit rutrum. Praesent id congue urna. Nulla ut augue rutrum velit tincidunt interdum nec et risus. Suspendisse dignissim lorem et auctor sollicitudin. Ut non magna aliquet, malesuada urna et, vestibulum ante. Mauris finibus eget nibh sit amet tempus. Cras non tempus quam, sit amet placerat ligula. Nam elementum aliquam ipsum eget vehicula. Aliquam nec nunc dui. Morbi non pellentesque neque. Vestibulum risus lorem, hendrerit ut risus sit amet, vestibulum malesuada nulla. Phasellus venenatis mi sit amet erat mattis, et interdum diam ultricies. Nunc odio leo, volutpat vel tellus non, dictum sollicitudin enim. Proin aliquet sapien sit amet diam dapibus, non vehicula metus semper. Nunc vitae sapien faucibus, mattis metus id, rhoncus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas molestie varius velit, vitae euismod sapien lacinia consectetur. Nulla facilisi. Donec varius eros et dui efficitur, a eleifend mi elementum. Fusce vehicula id nulla nec pretium. Proin eros ligula, porta eget nunc nec, pretium mollis lacus. Pellentesque hendrerit mauris urna, eu rutrum erat imperdiet et. Curabitur elit arcu, cursus nec ultricies non, commodo vitae tortor. "
let longTextArr = longText.split(" "); //const words = longText.toLowerCase().match(/\b\w+\b/g) || []; (This is another method using RegEx that would allow you to ignore things such as Upper/lowercase and punctuation attached to the words (EX: it will recognise ,et))
let counter = longTextArr.length;
let etCounter = 0;

for(let i=0; i<counter; i++){
    if(longTextArr[i] === "et"){
        etCounter++;
    } 
}

//Bonus2
let phraseToCheck = "Was it a car or a cat I saw?"
let charArr = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, "").split("");
let notPalindrome = false;

for(let i=0; i<(Math.ceil(charArr.length/2)); i++){
 if(charArr[i] !== charArr[charArr.length -1 - i]){
    notPalindrome = true;
    break
 }
}
if (notPalindrome === true){
    console.log("This string is not a palindrome")
} else {
    console.log("Congrats, you found a palindrome")
}