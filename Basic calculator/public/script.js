document.addEventListener('DOMContentLoaded',()=>{
    let one=document.querySelector('.one');
    let two=document.querySelector('.two');
    let three=document.querySelector('.three');
    let four=document.querySelector('.four');
    let five=document.querySelector('.five');
    let six=document.querySelector('.six');
    let seven=document.querySelector('.seven');
    let eight=document.querySelector('.eight');
    let nine=document.querySelector('.nine');
    let zero=document.querySelector('.zero');
    let equal=document.querySelector('.equal');
    let del=document.querySelector('.del');
    let divide=document.querySelector('.divide');
    let multiply=document.querySelector('.multiply');
    let minus=document.querySelector('.minus');
    let plus=document.querySelector('.plus');
    let dot=document.querySelector('.dot');
    let cent=document.querySelector('.cent');
    let ac=document.querySelector('.ac');
    let output=document.getElementById('output');
    let error=document.getElementById('error');
    let toggleBtn=document.getElementById('toggle-btn');
    let body=document.querySelector('.body');
    let calculator=document.querySelector('.calculator');
    let outputScreen=document.querySelector('.output-screen');
    let row1=document.querySelector('.row1')
    let row2=document.querySelector('.row2')
    let row3=document.querySelector('.row3')
    let row4=document.querySelector('.row4')
    let row5=document.querySelector('.row5')
    let toggleText=document.getElementById('toggle-text');
    one.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='1';
    });
    two.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='2';
    })
    three.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='3';
    })
    four.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='4';
    })
    five.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='5';
    })
    six.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='6';
    })
    seven.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='7';
    })
    eight.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='8';
    })
    nine.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='9';
    })
    zero.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='0';
    })
    multiply.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='*';
    })
    divide.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='/';
    })
    dot.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='.';
    })
    plus.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='+';
    })
    minus.addEventListener('click',()=>{
        error.textContent="";
        output.textContent+='-';
    })
    equal.addEventListener('click',()=>{
        error.textContent="";
       let expression=document.getElementById('output').textContent;
       if(expression=="")
       {
        error.textContent="Empty expression!"
       }
       try{
        let answer=eval(expression);
        output.textContent=answer;
        console.log(eval(expression));
       }
       catch(err){
        output.textContent="";
        error.textContent="Invalid expression!"
       }
    })
    del.addEventListener('click',()=>{
        output.textContent = output.textContent.slice(0, -1);
    })
    ac.addEventListener('click',()=>{
        output.textContent="";
    })
    cent.addEventListener('click',()=>{
        output.textContent+='%';
    }) 
    function toggleDarkMode(){
        if(toggleBtn.checked==true)
        {
            console.log("On")
            row2.style.color="black";
            row3.style.color="black";
            row4.style.color="black";
            row5.style.color="black";
            calculator.classList.remove('bg-gray-800');
            calculator.classList.add('bg-white');
            body.classList.add('bg-gray-800');
            outputScreen.classList.remove('bg-gray-800');
            outputScreen.classList.add('bg-white');
            outputScreen.classList.remove('text-gray-300');
            outputScreen.classList.add('text-black');
            toggleText.classList.add('text-white')
        }
        else{
           
            row2.style.color="white";
            row3.style.color="white";
            row4.style.color="white";
            row5.style.color="white";
            calculator.classList.add('bg-gray-800');
            calculator.classList.remove('bg-white');
            body.classList.remove('bg-gray-800');
            outputScreen.classList.add('bg-gray-800');
            outputScreen.classList.remove('bg-white');
            outputScreen.classList.add('text-gray-300');
            outputScreen.classList.remove('text-black');
            toggleText.classList.remove('text-white')
        }
        
    }
    toggleBtn.addEventListener('change',toggleDarkMode);
    toggleDarkMode();
        
    
});