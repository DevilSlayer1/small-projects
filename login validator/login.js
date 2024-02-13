

function isValidLogin(token)
{
    if(token==null || token.length==0 || token=='')
    {
        return false;
    }
    else{
        return true;
    }
}