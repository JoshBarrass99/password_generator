const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

 let passwordOneEl = document.getElementById("passwordOne-El")
 let passwordTwoEl = document.getElementById("passwordTwo-El")



function renderPassword() {

    let passwordlength = document.getElementById("passwordLength-El").value
    
    //password one
    
    function generateRandomCharOne() {
         let randomCharOne = Math.floor(Math.random() * characters.length)
         return randomCharOne
     }
    function generatePasswordOne () {
        let randomPasswordOne = " "
        for (let i = 0; i < passwordlength; i++) {
            randomPasswordOne += characters[generateRandomCharOne()]
        }
        return randomPasswordOne
    }
    passwordOneEl.textContent = generatePasswordOne()
    
    //password two
    
    function generateRandomCharTwo() {
         let randomCharTwo = Math.floor(Math.random() * characters.length)
         return randomCharTwo
     }
    function generatePasswordTwo () {
        let randomPasswordTwo = " "
        for (let i = 0; i < passwordlength; i++) {
            randomPasswordTwo += characters[generateRandomCharTwo()]
        }
        return randomPasswordTwo
    }
    passwordTwoEl.textContent = generatePasswordTwo()
    
    }








