let keyshift = document.getElementById("shift")

function validate(){
  console.log(keyshift)
  //console.log(typeof(keyshift.value))
  //if (typeof(keyshift.value) !== number){
    //let alarmbox = document.getElementById("alarm")
    //alarmbox.textContent = "You have to input a number as a key shift"
  //}
  //else{
    //return true
  //}
}




function encode(string, key){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let user = string.toLowerCase()
  let ceaser = ""
  for(let l=0; l<user.length;l++){
    try{
      let stringlet = user[l]
      let letter = alphabet.index(l)
      let replace = (letter + key) % 26
      let new_letter = alphabet[replace]
      ceaser += new_letter
    }
    catch{
      ceaser += l 
    }
  }
  return ceaser
}

function decode(encode_string, key){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let user = encode_string.toLowerCase()
  let unceaser = ""
  for(k=0;k<user.length;k++){
    try{
      let stringlet = user[l]
      let letter = alphabet.index(l)
      let replace = (letter - key) % 26
      let new_letter = alphabet[replace]
      unceaser += new_letter
    }
    catch{
      unceaser += l 
    }
  }
  return unceaser
}


function clear(){
let bigbox = document.getElementById("output");
let box = document.getElementById("input")
box.textContent = "";
bigbox.textcontent = "";
}

function encode_button(){
let bigbox = document.getElementById("output");
let box = document.getElementById("input")
let evalidated = validate()
if (evalidated == true){
let encoded = encode(box.textContent, keyshift.value)
bigbox.textContent = encoded;
}
}

function decode_button(){
let bigbox = document.getElementById("output");
let box = document.getElementById("input")
let dvalidated = validate()
if (dvalidated == true){
let decoded = decode(box.textContent, keyshift.value)
bigbox.textContent = decoded;
}
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









