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
            //console.log(ch);
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
    let c1=0,c2=0,ch,index1,index2;
    for (let i=0;i< email.length;i++)
    {
        ch=email.charAt(i);
        if(ch=='@')
        {
            index1=i
            c1=c1+1;
        }
        if(ch=='.')
        {
            index2=i;
            c2=c2+1;
        }
    }
    //console.log(c1,c2);
    //console.log(index1,index2)
    if(c1!=1 || c2!=1 || index2<index1)
    {
        return false;
    }
    else{
        return true;
    }
}

// Example usage


function checkEmail(Email)
{
    let email=Email.toLowerCase();
    let k=isValidEmail(email);
    if(email=='')
    {
        successemail.innerHTML="";
        erroremail.innerHTML="";
        erroremail.innerHTML="Email cannot be empty!";
        return false;
    }
    else if(!isNaN(Number(email)))
    {
        successemail.innerHTML="";
        erroremail.innerHTML="";
        erroremail.innerHTML="Email cannot be a number!";
        return false;
    }
    else if(email.length>320)
    {
        successemail.innerHTML="";
        erroremail.innerHTML="";
        erroremail.innerHTML="Email is too long!";
    }
    else if(k==false)
    {
        successemail.innerHTML="";
        erroremail.innerHTML="";
        erroremail.innerHTML="Email is Invalid!";
        return false;
    }
    else{
        successemail.innerHTML="";
        erroremail.innerHTML="";
        return true;
    }
}
function checkPassword(password)
{
    //console.log(password.length)
    if(password=='')
    {
        successpassword.innerHTML="";
        errorpassword.innerHTML="";
        errorpassword.innerHTML="Password cannot be empty!";
        return false;
    }
    else if(password.length<8)
    {
        successpassword.innerHTML="";
        errorpassword.innerHTML="";
        errorpassword.innerHTML="Password must be of atleast 8 characters!";
        return false;
    }
    else if(password.length>500)
    {
        successpassword.innerHTML="";
        errorpassword.innerHTML="";
        errorpassword.innerHTML="Password is too long!";
        return false;
    }
    else if(password.length>=8 && password.length<=50)
    {
        let number=0,special=0,uppercase=0,lowercase=0,ch;
        for(let i = 0;i<password.length;i++)
        {
            ch=password.charAt(i);
            if(ch>='A' && ch<='Z')
            {
                uppercase++;
            }
            if(ch>='a' && ch<='z')
            {
                lowercase++;
            }
            if(ch>=0 || ch<=9)
            {
                number++;
            }
            if (!(ch.match(/[a-zA-Z0-9]/) || ch === ' ')) {
                special++;
            }
        }
        //console.log(uppercase,lowercase,number,special);
        if(uppercase<1 || lowercase<1 || special<1 || number<1)
        {
            successpassword.innerHTML="";
            errorpassword.innerHTML="";
            errorpassword.innerHTML="Password must have atleast one uppercase, lowercase, number and a special character!";
            return false;
        }
        else{
            return true;
        }
    }
    else {
        return true;
    }
}
const inputusername=document.getElementById('username-input');

inputusername.addEventListener('input',()=>{
    let username=inputusername.value;
    //console.log(username);
    let usernameValidity=checkUsername(username);
    //console.log(usernameValidity);
    if(usernameValidity==true)
        {
            username.value="";
            errorusername.innerHTML="";
            successusername.innerHTML="Username entered successfully!";
        }
        else{
            inputusername.focus();
        }
});

const inputemail=document.getElementById('email-input');
inputemail.addEventListener('input',()=>{
    let email=inputemail.value;
    let emailValidity=checkEmail(email);
    //console.log(emailValidity);
    if(emailValidity==true)
        {
            inputemail.innerHTML="";
            erroremail.innerHTML="";
            successemail.innerHTML="Email entered successfully!";
        }
        else
        {
    
        }
});

const inputpassword=document.getElementById('password-input'); 
inputpassword.addEventListener('input',()=>{
    let password=inputpassword.value;
    
    
    let passwordValidity=checkPassword(password);
    
    
    //console.log(passwordValidity);
    
    
    if(passwordValidity==true)
    {
        inputpassword.innerHTML="";
        errorpassword.innerHTML="";
        successpassword.innerHTML="Password entered successfully!";
    }
})

/*submit.addEventListener('click',(event)=>{
    event.preventDefault();

    let form = document.getElementById('form');
    let username=inputusername.value;
    //console.log(username);
    let usernameValidity=checkUsername(username);
let email=inputemail.value;
    let emailValidity=checkEmail(email);
let password=inputpassword.value;
    
    
    let passwordValidity=checkPassword(password);
    if(usernameValidity==true && emailValidity==true &&passwordValidity==true){
        
        //reset messages
        errorpassword.innerHTML="";
        successpassword.innerHTML="";
        erroremail.innerHTML="";
        successemail.innerHTML="";
        errorusername.innerHTML="";
        successusername.innerHTML="";
    }
    
}); 
*/
function checkform(event)
{
    event.preventDefault();

    let form = document.getElementById('form');
    let username=inputusername.value;
    //console.log(username);
    let usernameValidity=checkUsername(username);
    let email=inputemail.value;
    let emailValidity=checkEmail(email);
    let password=inputpassword.value;
    
    
    let passwordValidity=checkPassword(password);
    if(usernameValidity==true && emailValidity==true &&passwordValidity==true){
        
        //reset messages
        errorpassword.innerHTML="";
        successpassword.innerHTML="";
        erroremail.innerHTML="";
        successemail.innerHTML="";
        errorusername.innerHTML="";
        successusername.innerHTML="";
        return true;
    }
    return false;
}