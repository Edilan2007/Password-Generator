
let leftPassword = document.getElementById("passwordLeft");
let rightPassword = document.getElementById("passwordRight");


function generateA(){
  const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
  "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
  "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  let result = '';
  const length = parseInt(document.getElementById('lengthInput').value);

  if (isNaN(length) || length < 1 || length > 15) {
    alert("Please enter a number between 1 and 15 !!!");
    return;
  }
  for(let i = 0; i < length; i++){
    const randomInd = Math.floor(Math.random()*characters.length);
    result += characters[randomInd];  
    
  }
  return leftPassword.textContent = result ;
}
function generateB(){
  const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
  "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
  "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  let result = '';
  const length = parseInt(document.getElementById('lengthInput').value);

  if (isNaN(length) || length < 1 || length > 15) {
    return;
  }
  for(let i = 0; i < length; i++){
    const randomInd = Math.floor(Math.random()*characters.length);
    result += characters[randomInd];  
    
  }
  return rightPassword.textContent = result ;
}

function generate(){
  generateA();
  generateB();
}
