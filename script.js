let number = document.querySelector(".number")
let button = document.querySelector(".generate")

let generateNumber = () => {
  let randNum = Math.floor(Math.random() * 10 + 1)
number.innerHTML = randNum
}

button.addEventListener("click", generateNumber)