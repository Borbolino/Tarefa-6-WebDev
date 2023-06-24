let dark = false;
let button = document.querySelector("#mode")
let buttons = document.querySelectorAll("#ind")
let bod = document.querySelector("body")

function changeMode() {
  if(dark == false){
    dark = true
    bod.classList.add("dark")
    bod.classList.remove("light")
    button.innerHTML = "Modo Claro"
    buttons[0].classList.add("db")
    buttons[0].classList.remove("lb")
    buttons[1].classList.add("db")
    buttons[1].classList.remove("lb")
    buttons[2].classList.add("db")
    buttons[2].classList.remove("lb")
    buttons[3].classList.add("db")
    buttons[3].classList.remove("lb")
    buttons[4].classList.add("db")
    buttons[4].classList.remove("lb")
  }
  
  else {
    dark = false
    bod.classList.add("light")
    bod.classList.remove("dark")
    button.innerHTML = "Modo Escuro"
    buttons[0].classList.add("lb")
    buttons[0].classList.remove("db")
    buttons[1].classList.add("lb")
    buttons[1].classList.remove("db")
    buttons[2].classList.add("lb")
    buttons[2].classList.remove("db")
    buttons[3].classList.add("lb")
    buttons[3].classList.remove("db")
    buttons[4].classList.add("lb")
    buttons[4].classList.remove("db")
  }
}

