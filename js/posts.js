window.addEventListener("load",()=>{

    var hamburger_dot = document.getElementById("hamburger-dot");
    var hamburger_header = document.getElementById("hamburger-header");
    var hamburger_close = document.getElementById("hamburger-close");
    var hamburger_overlay = document.getElementById("hamburger-overlay");

    hamburger_dot.onclick = () =>{
        hamburger_header.classList.add("active")
        hamburger_close.classList.add("active")
        hamburger_overlay.classList.add("active")
    }
    hamburger_close.onclick = () =>{
        hamburger_header.classList.remove("active")
        hamburger_close.classList.remove("active")
        hamburger_overlay.classList.remove("active")
    }
    hamburger_overlay.onclick = () =>{
        hamburger_header.classList.remove("active")
        hamburger_close.classList.remove("active")
        hamburger_overlay.classList.remove("active")
    }
    
})