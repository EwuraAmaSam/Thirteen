var textarea = document.querySelector(".textarea")
var text = textarea.value

var phrase = text.split(" ")

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




let final = ""
function Display(){
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

    }
    function copyText() {
        var input = document.querySelector(".copy")
      
        var tempTextArea = document.createElement('textarea');
      
        tempTextArea.value = final;
      
        document.body.appendChild(tempTextArea);
      
        tempTextArea.select();
      
        document.execCommand('copy');
      
        document.body.removeChild(tempTextArea);
      
        alert('Text copied!');
        function Refresh(){
            location.reload()
            document.querySelector(".textarea").value = ""
        }
        Refresh()
      }
