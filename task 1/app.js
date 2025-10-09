
let paragraph = prompt("Enter a  any paragraph:");


let words = paragraph.split(" ");


for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 0) {
        words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
}

let capitalizedParagraph = words.join(" ");

document.write( capitalizedParagraph );

