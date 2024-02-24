function sendEmail()
{
  console.log(document.getElementById('email').value);
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "Anish Das",
    Password : "Kirtania Sada Hari@",
    To : "lifeisstrange506@gmail.com",
    From : "anishdas506@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message));
}
sendEmail();