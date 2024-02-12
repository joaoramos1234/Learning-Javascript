for (let i = 0; i < 3; i++) {
  console.log(`For: ${i}`);
}

console.log("\n====================\n\n");

let j = 0;
while (j < 3) {
  console.log(`While: ${j}`);
  j++;
}

console.log("\n====================\n\n");

let k = 0;
do {
  console.log(`Do While: ${k}`);
  k++;
} while (k < 3);

console.log("\n====================\n\n");

let frutas = ["uva", "morango", "banana", "laranja"];

for (let i in frutas) {
  console.log(`For In: ${frutas[i]}`);
}

console.log("\n====================\n\n");

for (let f of frutas) {
  console.log(`For Of: ${f}`);
}

console.log("\n====================\n\n");

let num = 2;
switch (num) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("Outro");
    break;
}
