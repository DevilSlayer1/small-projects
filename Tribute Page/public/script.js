document.addEventListener('DOMContentLoaded',()=>{
    let root=document.getElementById('root');
    let quote=document.getElementById('quote');
    let timeline=document.getElementById('timeline')
    let root2=document.getElementById('root2');
    let motivation=document.getElementById('motivation');
    quote.addEventListener('click',()=>{
        root.classList.toggle('hide');
        root.style.animationName='anim';
        root.style.animationDuration='1s';
    });
    motivation.addEventListener('click',()=>{
        root2.classList.toggle('hide');
        
        if(root2.classList.contains('hide'))
        {
            root.style.display='block';
            root2.style.animationName='anim2';
            root2.style.animationDuration='1s';
        }
    });
});