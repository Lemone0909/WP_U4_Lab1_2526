let keyshift = document.getElementById("shift")

function validate(){
    let shift = Number(keyshift.value)
    if (shift === 0|| shift > 0){
      return shift
    }
    else{
      alarmbox = document.getElementById("alarm")
      alarmbox.textContent = "Please enter a number above 0"
      keyshift.value = '0'
    }
  }





function encode(string, key){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let user = string.toLowerCase()
  let ceaser = ""
  for(let l=0; l<user.length;l++){    
    let stringlet = user[l]
    if(alphabet.includes(stringlet) === true){
      let letter = alphabet.indexOf(stringlet)
      let replace = (letter + Number(key)) % 26
      let new_letter = alphabet[replace]
      ceaser += new_letter
  }
  else{
    ceaser += " "
  }
}
      return ceaser

}


function decode(encode_string, key){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let user = encode_string.toLowerCase()
  let unceaser = ""
  for(k=0;k<user.length;k++){
      let stringlet = user[k]
      if(alphabet.includes(stringlet) === true){
      let letter = alphabet.indexOf(stringlet)
      let replace = (letter - Number(key) + 26) % 26
      let new_letter = alphabet[replace]
      unceaser += new_letter
    }
    else{
      unceaser += " "
    }
  
  
  
    return unceaser
  }
}



function cleared(){
let bigbox = document.getElementById("output");
let box = document.getElementById("input");
box.textContent = "";
bigbox.textContent = "";
}

function encode_button(){
let bigbox = document.getElementById("output");
let box = document.getElementById("input")
let evalidated = validate()
let encoded = encode(box.textContent, keyshift.value)
bigbox.textContent = encoded;
}

function decode_button(){
let bigbox = document.getElementById("output");
let box = document.getElementById("input")
let dvalidated = validate()
let decoded = decode(box.textContent, keyshift.value)
bigbox.textContent = decoded;
}



function genKeyboard(){
const alpha = "qwertyuiop*asdfghjkl*zxcvbnm";
const bod = document.getElementsByTagName("body")[0];
let l = 0;
for (let i=0; i<3; i++){
  const keyrow = document.createElement("div");
  keyrow.className = "keyboard";
  bod.appendChild(keyrow);
  while (alpha[l] !== "*" && l < alpha.length){
    const key = document.createElement("div");
    key.className = "keys";
    key.id = alpha[l];
    key.textContent = alpha[l].toUpperCase();
    key.onclick = function(){keyclick(key)};
    keyrow.appendChild(key);
    l++;

    }
    l++;
  }
  const barrow = document.createElement("div");
  barrow.className = "keyboard";
  const space = document.createElement("div");
  space.className = "barbuttons";
  space.id = " ";
  space.textContent = "SPACE";
  space.onclick = function(){keyclick(space)};
  barrow.appendChild(space);
  bod.appendChild(barrow);
  
}

function keyclick(letter){
  const letterbox = document.getElementById("input");
  letterbox.textContent += letter.id;

}









