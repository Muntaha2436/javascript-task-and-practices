function upperCase() {
  let usertext = document.getElementById("usertext").value.toUpperCase();
  document.getElementById("output").innerHTML = usertext;
}

function lowerCase() {
  let usertext = document.getElementById("usertext").value.toLowerCase();
  document.getElementById("output").innerHTML = usertext;
}


function capitalize() {
  let usertext = document.getElementById("usertext").value;
  let words = usertext.split(" ");
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  let capitalizedText = capitalizedWords.join(" ");
  document.getElementById("output").innerHTML = capitalizedText;
}


function bold() {
  let usertext = document.getElementById("usertext").value;
  document.getElementById("output").innerHTML = `<strong>${usertext}</strong>`;
}

function italic() {
  let usertext = document.getElementById("usertext").value;
  document.getElementById("output").innerHTML = `<em>${usertext}</em>`;
}
