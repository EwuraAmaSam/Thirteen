var textarea = document.querySelector(".textarea")
const decrypt = document.querySelector(".decrypt")


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
'v', 'w', 'x', 'y', 'z']

var ALPH = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
'V', 'W', 'X', 'Y', 'Z']

function Decrypt(){
    var text = textarea.value
    var phrase = text.split(" ")
    var final = ""

    for (var i = 0; i < phrase.length; i++){
        var word = phrase[i]
        for (var j = 0; i < word.length; j++){
            var letter = word[j]
            if (alphabet.includes(letter)){
                var element = alphabet.indexOf(letter)
                var newLetter = element-13
                console.log("13 after " + ALPH[element] + " is " + ALPH[newWord])
                // console.log(alphabet[newLetter])
            }
            else if (ALPH.includes(letter)){
                var element = ALPH.indexOf(letter)
                newWord = element-13
                console.log("13 after " + ALPH[element] + " is " + ALPH[newWord])
                final += ALPH[newWord] 
            }   
            else if ((alphabet.includes(letter)) == false){
                final += letter
            }
            else{
                alert("This is strange")
            }
        }
        final += " "
    }

    

}

decrypt.addEventListener('click', Decrypt)