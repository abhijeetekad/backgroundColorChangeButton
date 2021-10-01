var containerEl= document.querySelector(".container")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btnEl= document.getElementById("btn")
const color = document.querySelector(".color")
window.addEventListener("load",function(){
  let colorHex = "#"
  for (let i=0; i<6;i++){
    let randomNumber= getRandomNumber();
    colorHex+=hex[randomNumber];
  }
  color.textContent=colorHex;
  //document.body.style.backgroundColor=colorHex;
  containerEl.style.backgroundColor=colorHex;
})
function getRandomNumber(){
  return Math.floor(Math.random()*hex.length)
}
btnEl.addEventListener("click",function(){
  let colorHex = "#"
  for (let i=0; i<6;i++){
    let randomNumber= getRandomNumber();
    colorHex+=hex[randomNumber];
  }
  color.textContent=colorHex;
  //document.body.style.backgroundColor=colorHex;
  containerEl.style.backgroundColor=colorHex;
})
function getRandomNumber(){
  return Math.floor(Math.random()*hex.length)
}



