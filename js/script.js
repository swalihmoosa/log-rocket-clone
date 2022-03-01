window.addEventListener("load",()=>{
    var icon = document.getElementById("hamburger-icon");
    var menu = document.getElementById("hamburger-menu");
    
    icon.onclick = () =>{
        menu.classList.add('active')

    }
})