document.getElementById("arrow").addEventListener("click", function(){
    document.getElementById("control").style.left = "0px";
                                                 
});
document.getElementById("hide").addEventListener("click", function(){
    document.getElementById("control").style.left = "-190px";
                                                 
});

document.getElementById("bg1").addEventListener("click",function(){
    document.getElementById("bgimage").style.backgroundImage = "url(img/BG1.jpg)";
    document.getElementById("bgimage").style.backgroundRepeat = "no-repeat";       
});
document.getElementById("bg2").addEventListener("click",function(){
    document.getElementById("bgimage").style.backgroundImage = "url(img/BG2.jpg)";
    document.getElementById("bgimage").style.backgroundRepeat = "repeat";                                            
});
document.getElementById("bg3").addEventListener("click",function(){
    document.getElementById("bgimage").style.backgroundImage = "url(img/BG3.png)";
    document.getElementById("bgimage").style.backgroundRepeat = "no-repeat";
});

document.getElementById("bg4").addEventListener("click",function(){
    document.getElementById("bgimage").style.backgroundImage = "url(img/BG4.jpg)";
});