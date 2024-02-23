function generatePassword(l=32)
{
    let ref='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.@#$%^&|?';
    let str=" ";
    while(str.length!=l+1)
    {
        let tokenIndex=Math.floor(Math.random()*(ref.length-1)+1)
        str=str+ref[tokenIndex];
    }
    return str.trim();
}
function encoder(n){
    let newstr=generatePassword(n);
    let ref='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.@#$%^&|?';
    let str=""
    let i=0
    while(i!=6)
    {
        let tokenIndex=Math.floor(Math.random()*(ref.length-1)+1)
        str=str+ref[tokenIndex];
        i++;
    }
    return newstr+str;
}
let k=encoder()
console.log(k);

module.exports = generatePassword;