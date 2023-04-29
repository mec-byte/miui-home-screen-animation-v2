function iconclick () {
    const icon = document.querySelector(".icon");
    icon.setAttribute("style", "background-size: 15rem;");
    icon.style.height = ("100%");
    icon.style.margin = ("0");
    icon.style.width = ("100%");
    icon.style.BorderRadius = ("0");
    const blur = document.querySelector(".blur");
    blur.setAttribute("style", "backdrop-filter: blur(20px)");
    const backhome = document.querySelector(".bottom-bar");
    backhome.setAttribute("style", "margin-bottom: 0");
} 


function backhome () {
    const icon = document.querySelector(".icon");
    icon.setAttribute("style", "background-size: 50px;");
    icon.style.height = ("50px");
    icon.style.margin = ("30px");
    icon.style.width = ("50px");
    icon.style.BorderRadius = ("0");
    const blur = document.querySelector(".blur");
    blur.setAttribute("style", "backdrop-filter: blur(0px)");
    const backhome = document.querySelector(".bottom-bar");
    backhome.setAttribute("style", "margin-bottom: -15px");
} 