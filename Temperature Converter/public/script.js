document.addEventListener('DOMContentLoaded', ()=>{
    let convert=document.getElementById('convert');
    let temperature = document.getElementById('temperature');
    temperature.addEventListener('input',()=>{
        
        let tempValue = parseFloat(temperature.value);
         // Parse as float
         if(isNaN(tempValue))
         {
             output.value="";
             return false;
         }
        let option = document.getElementById('option').value;
        let output = document.getElementById('output');
        
        if(option == "celcius")
        {
            let fahrenheit = (9*tempValue/5)+32;
            output.innerHTML = fahrenheit.toFixed(2)+' F';
        } 
        if(option == "farenheit")
        {
            let Celsius = (5/9)*(tempValue-32);
            output.innerHTML = Celsius.toFixed(2)+'\u00B0'+'C';
        }
    })
});
