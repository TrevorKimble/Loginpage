function add_info(input)
{
    let pass = true;
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;
    console.log(pass);
    pass = check(a,b);
    console.log(pass);
    if(pass === true)
    {
        names.push(a);
        user_names.push(b);
        passwords.push(c);
    }
    

    console.log(names,user_names,passwords);
}

function check(a,b)
{
    console.log("test")
    for(x = 0;x< names.length; x++)
    {
        if(a == names[x])
        {
            alert("Already taken");
            return false;
        }
        if(b == user_names[x])
        {
            alert("Already taken");
            return false;
        }
    }
    return true;
}


var  names = [];
var  user_names = [];
var  passwords = [];
