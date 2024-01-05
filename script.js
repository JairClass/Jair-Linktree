window.onload = function(){
    document.querySelector(".loader").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"; 
    }, 1000);
}
