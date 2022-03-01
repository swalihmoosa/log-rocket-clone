window.addEventListener("load",()=>{
    var icon = document.getElementById("hamburger-icon");
    var menu = document.getElementById("hamburger-menu");
    var close = document.getElementById("close");
    var overlay = document.getElementById("overlay");
    
    icon.onclick = () =>{
        menu.classList.add('active')
        overlay.classList.add('active')
    }
    close.onclick = () =>{
        menu.classList.remove('active')
        overlay.classList.remove('active')
    }
    overlay.onclick = () =>{
        menu.classList.remove('active')
        overlay.classList.remove('active')
    }

})