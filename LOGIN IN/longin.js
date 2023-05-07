
const inputPass = document.getElementById("password");
const menu = document.getElementById("menu");
const list = document.getElementsByClassName("list");

let menuS =() =>{
    for (let index = 0; index < list.length; index++){
        if (list[index].style.display === "none") {
            list[index].style.display = "grid";
            menu.style.display = "none"
        } else {
            list[index].style.display = "none"

        }  
    }
        
}
let toggleP = () =>{
    if (inputPass.type === "password"){
        inputPass.type = "text"
        password.textContext = "Show"
    }else{
        inputPass.type = "password"
        password.textContext = "Hide"
    }
}

