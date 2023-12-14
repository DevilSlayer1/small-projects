document.addEventListener('DOMContentLoaded',()=>{
    const crossmark=document.querySelector(".cross");
    const ok=document.querySelector(".ok-btn");
    const close=document.querySelector(".close-btn");
    const main=document.getElementById("main");
    crossmark.addEventListener('click',()=>{
        main.classList.toggle("hide");
    });
    ok.addEventListener('click',()=>{
        //Add function
    });
    close.addEventListener('click',()=>{
        main.classList.toggle("hide");
    });
});