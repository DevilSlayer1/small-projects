document.addEventListener('DOMContentLoaded',()=>{
    const seemore=document.getElementById("btn");
    const target=document.querySelector(".box-22");
    seemore.addEventListener('click',()=>{
        target.classList.toggle("hide");
        if(seemore.textContent=='see less')
        {
            seemore.textContent='see more';
        }
        else{
            seemore.textContent='see less';
        }
    });
});