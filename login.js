function add_info(input)
{
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
   
    names.push(document.getElementById("name").value);
    user_names.push(document.getElementById("email").value);
    passwords.push(document.getElementById("password").value);

    console.log(names,user_names,passwords);
}

function check()
{

}


var  names = [];
var  user_names = [];
var  passwords = [];
