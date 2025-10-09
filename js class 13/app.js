// let text = "hello miss how ! are you"
// for (let i = 0; i< text.length;i++){
//     if(text.charAt(i)==="!"){
//         alert( "excelemation symbol is find it now ")
//         break
//     }
// }

// for(let i=0; i<text.length;i++){
//     if(text.slice(i,i+3)==="are"){
//         console.log("yahuuu this word is finding now")
//     }
// }

// Gamepad

let player1 = prompt(" whats your name")
let player2 = prompt (" whats your name")

let player1Choice = prompt(`${player1} head loga ya tail`)
let player2Choice = prompt (`${player2} head loge ya tail`)

let random = Math.round(Math.random());
 
if(random=== 1 && player1Choice == "head"){
    console.log(`${player1} ap winner han`);
}
else {
    console.log(` ${player2} ap winner han`);
    
}


