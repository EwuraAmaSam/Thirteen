var textarea = document.querySelector(".textarea")
const generate = document.querySelector(".generate")


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 
'v', 'w', 'x', 'y', 'z'];

var ALPH = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
'V', 'W', 'X', 'Y', 'Z'];


function Display(){
    var text = textarea.value
    var phrase = text.split(" ")
    let final = ""

    // Loop through and convert each letter to another using ROT13
    for (var i = 0; i < phrase.length; i++){
        var word = phrase[i]
        for (var j = 0; j < word.length; j++){
            var letter = word[j]
            if (alphabet.includes(letter)){
                var element = alphabet.indexOf(letter)
                newWord = element+13
                console.log("13 after " + alphabet[element] + " is " + alphabet[newWord])
                final += alphabet[newWord]  
            }
            else if (ALPH.includes(letter)){
                var element = ALPH.indexOf(letter)
                newWord = element+13
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
    console.log(final)

    var tempTextArea = document.createElement('textarea');

  // Set the value of the textarea to the text you want to copy
  tempTextArea.value = final;

  // Append the textarea to the DOM
  document.body.appendChild(tempTextArea);

  // Select the text within the textarea
  tempTextArea.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary textarea element from the DOM
  document.body.removeChild(tempTextArea)
    alert("Copied")
    // location.reload()
}
generate.addEventListener('click', Display)







