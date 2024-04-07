const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

 let passwordOneEl = document.getElementById("passwordOne-El")
 let passwordTwoEl = document.getElementById("passwordTwo-El")
let passwordlength = 15


function renderPassword() {
    
//render password one

function generateCharacters() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordlength; i++) {
        randomPassword += generateCharacters()
    }
    return randomPassword
}

passwordOneEl.textContent = generatePassword()

//render password two

function generateCharactersTwo() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePasswordTwo() {
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordlength; i++) {
        randomPasswordTwo += generateCharactersTwo()
    }
    return randomPasswordTwo
}

passwordTwoEl.textContent = generatePasswordTwo()

}









