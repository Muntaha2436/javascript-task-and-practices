// function sumNum (num,num2){

//     document.write(num+num2)
// }
// sumNum(2,2)
// function userName (){
//     let name =prompt("enter your name")
//     alert(`hello ${name}`)
// }
// userName()
// function sum(){
//     let firstNumber =  Number(document.getElementById("firstnum").value)
//     let secondNumber = Number(document.getElementById("secondnum").value)
//     let total = firstNumber+secondNumber
//     let result = document.getElementById("result")
//     result.innerText= `the sum num is ${total}`
// }

// function lowerCase(){
//     let usertext = document.getElementById("usertext").value.toLowerCase()
//     let result = document.getElementById("output")
//     result.innerHTML=` Yahuu this are the convert to this <br/> ${usertext}`
// }
// function upperCase(){
//     let usertext = document.getElementById("usertext").value.toUpperCase()
//     let result = document.getElementById("output")
//     result.innerHTML=` Yahuu this are the convert to this <br/> ${usertext}`
// }

// function capitalize(){
//     let usertext = document.getElementById("usertext").Value
//      let capitalizedText = usertext.charAt(0).toUpperCase() + usertext.slice(1).toLowerCase()
//      let result = document.getElementById("output")
//      result.innerHTML= ` Yahuu this are the convert to this <br/> ${capitalizedText}`
// }

// function upperCase(){
//     let usertext = document.getElementById("usertext").value.toUpperCase()
//     let result = document.getElementById("output")
//     result.innerHTML=` ${usertext}`
// }

// function lowerCase(){
//     let usertext = document.getElementById("usertext").value.toLowerCase()
//     let result = document.getElementById("output")
//     result.innerHTML=`  ${usertext}`
// }

// function capitalize() {
//     let usertext = document.getElementById("usertext").value;
//     let capitalizedText = "";

//     if(usertext.length > 0) {
//         capitalizedText = usertext.charAt(0).toUpperCase() + usertext.slice(1).toLowerCase();
//     }

//     document.getElementById("output").innerHTML = `${capitalizedText}`;
// }


// function bold(){
//     let usertext = document.getElementById("usertext").value
//     let result = document.getElementById("output")
//     result.innerHTML=` <strong>${usertext}</strong>`
// }

// function italic(){
//     let usertext = document.getElementById("usertext").value
//     let result = document.getElementById("output")
//     result.innerHTML=` <em>${usertext}</em>`
// }

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
  let capitalizedText = "";

  if (usertext.length > 0) {
    capitalizedText =
      usertext.charAt(0).toUpperCase() + usertext.slice(1).toLowerCase();
  }

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
