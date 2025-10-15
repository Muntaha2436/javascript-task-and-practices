// task 1

// let birthYear = +prompt("enter your birthyear");
// let time = new Date()
// let user = time.getFullYear()
// let final = user-birthYear
// alert(`congrajulations you its ${final} years old `)


// task 2
//  let day= new Date()
//  document.write(day.getDate())
//  const months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// let today = new Date()
// let month=today.getMonth()
// document.write(
//     months[month]
// )
// document.write("<br/>")
//  let hours = new Date() 
//   let minute = new Date()
//    let sec = new Date()
  
//    document.write(`${hours.getHours()}:${minute.getMinutes()}:${sec.getSeconds()}`)


// task 3
let now = new Date(); 
let ramzan2026 = new Date("2026-02-17T00:00:00"); 

let diffMilliseconds = ramzan2026 - now;

let diffSeconds = diffMilliseconds / 1000;

let diffMinutes = diffSeconds / 60;


let diffHours = diffMinutes / 60;

document.write(`Abhi se Ramzan tak milliseconds:${diffMilliseconds}`);
document.write("<br/>")
document.write(`Abhi se Ramzan tak seconds:${diffSeconds}`);
document.write("<br/>")
document.write(`Abhi se Ramzan tak minutes:${ diffMinutes}`);
document.write("<br/>")
document.write(`Abhi se Ramzan tak hours:${diffHours} `);

