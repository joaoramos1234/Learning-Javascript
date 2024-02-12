function whileLoop() {
  i = 0;

  while (i < 3) {
    i++;
    content.innerHTML += `<p>While: ${i}</p>`;
  }
  content.innerHTML += "<hr>";
}

function doWhileLoop() {
  i = 0;

  do {
    i++;
    content.innerHTML += `<p>Do While: ${i}</p>`;
  } while (i < 3);
  content.innerHTML += "<hr>";
}

function switchCase() {
  let num = 3;

  switch (num) {
    case 1:
      content.innerHTML += "<p>Case: 1</p>";
      break;
    case 2:
      content.innerHTML += "<p>Case: 2</p>";
      break;
    case 3:
      content.innerHTML += "<p>Case: 3</p>";
      break;
    default:
      content.innerHTML += "<p>Outro</p>";
      break;
  }
  content.innerHTML += "<hr>";
}

function forLoop() {
  for (let i = 0; i < 3; i++) {
    content.innerHTML += `<p>For: ${i}</p>`;
  }
  content.innerHTML += "<hr>";
}

function forInLoop() {
  for (let i in frutas) {
    content.innerHTML += `<p>For In: ${frutas[i]}</p>`;
  }
  content.innerHTML += "<hr>";
}

function forOfLoop() {
  for (let f of frutas) {
    content.innerHTML += `<p>For Of: ${f}</p>`;
  }
  content.innerHTML += "<hr>";
}
