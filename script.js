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

const fotoUsuario = document.querySelector("#usumagem");
const nomeUsuario = document.querySelector("#usuario");
async function pegaObj(p) {
  
  let ans = await fetch("https://api.github.com/users/" + p);
  let j = await ans.json();
  return j;
}
async function updateUsuario() {
  
  let obj = await pegaObj("Borbolino")
  fotoUsuario.src = obj.avatar_url;
  nomeUsuario.innerText = obj.login;
  let repositorio =  await pegaObj("Borbolino/repos")
  let contador = 1
  for(let k of github_ul.children) {

    k.children[0].href = repositorio[repositorio.lenght-contador].html_url;
    k.children[0].innerText = repositorio[repositorio.length-contador].name;
    contador++;
  }
}
updateUsuario();
