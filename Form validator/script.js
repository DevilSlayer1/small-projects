document.addEventListener('DOMContentLoaded',()=>{
    const errorusername=document.getElementById('username-error');
    const erroremail=document.getElementById('email-error');
    const errorpassword=document.getElementById('password-error');
    const successusername=document.getElementById('username-success');
    const successemail=document.getElementById('email-success');
    const successpassword=document.getElementById('password-success');
    const submit=document.querySelector('.btn');
    function checkUsername(username){
        if(username=='')
        {
            successusername.innerHTML="";
            errorusername.innerHTML="";
            errorusername.innerHTML="Username cannot be empty!";
            return false;
        }
        else if(!isNaN(Number(username)))
        {
            successusername.innerHTML="";
            errorusername.innerHTML="";
            errorusername.innerHTML="Username cannot be a number!";
            return false;
        }
        else if(username.length<5){
            successusername.innerHTML="";
            errorusername.innerHTML="";
            errorusername.innerHTML="Username too short!";
            return false;
        }
        else if(username.length>50)
        {
            successusername.innerHTML="";
            errorusername.innerHTML="";
            errorusername.innerHTML="Username too long!";
            return false;
        }
        else if(username.length>=5 && username.length<=50)
        {
            let ch;
            for(let i = 0;i<username.length;i++)
            {
                ch=username.charAt(i);
                console.log(ch);
                if(ch==" " || ch==' ' || ch==`'` || ch==`"` || ch=='`' || ch=='/' || ch=='&' || ch=='%' || ch=='+' || ch=='=' || ch=='?' || ch=='#' || ch=='$' || ch==';' || ch==':')
                {
                    successusername.innerHTML="";
                    errorusername.innerHTML="";
                    errorusername.innerHTML="Spaces and Special characters not allowed in username!"
                    return false;
                }
            }
            return true;
        }
        else
        {
            return true;
        }
    }
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
    
    // Example usage
    
    
    function checkEmail(email)
    {
        let k=isValidEmail();
        if(email=='')
        {
            erroremail.innerHTML="";
            erroremail.innerHTML="Email cannot be empty!"
            return false;
        }
        else if(!isNaN(Number(email)))
        {
            erroremail.innerHTML="";
            erroremail.innerHTML="Email cannot be a number!"
            return false;
        }
        else if(k==false)
        {
            erroremail.innerHTML="";
            erroremail.innerHTML="Email is Invalid!"
            return false;
        }
        else{
            erroremail.innerHTML="";
            return true;
        }
    }
    function checkPassword(password)
    {

    }
    submit.addEventListener('click',()=>{
        const inputusername=document.getElementById('username-input');
        const inputemail=document.getElementById('email-input');
        const inputpassword=document.getElementById('password-input');  
        let username=inputusername.value;
        console.log(username);
        username.value="";
        let email=inputemail.value;
        let password=inputpassword.value;
        let usernameValidity=checkUsername(username);
        let emailValidity=checkEmail(email);
        let passwordValidity=checkPassword(password);
        console.log(usernameValidity)
        console.log(emailValidity);
        if(usernameValidity==true)
        {
            username.value="";
            errorusername.innerHTML="";
            successusername.innerHTML="Username successfully entered!"
        }
        else{
            inputusername.focus();
        }
    });
    
});