/* Add your JavaScript to this file */
window.onload = function(){
    var form = document.getElementsByTagName('form').item(0);
    form.onsubmit = function(){
        return addEmail(this);
    };
}

function addEmail(formData){
    let newEmail = formData.email.value;
    var messageElement = document.querySelector('.message');
    var message = null;
    if(newEmail){
        message =`Thank you! Your email address ${newEmail} has been added to your mailing list`;
    }else{
         message = "Please enter a validate email";
    }
    messageElement.innerHTML = message;
    return false

}