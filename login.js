function add_info(input)
{
    let pass = true;
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;
    let d = document.getElementById("birthday").value;
    console.log(pass);
    pass = check(a,b);
    console.log(pass);
    if(pass === true)
    {
        names.push(a);
        user_names.push(b);
        passwords.push(c);
    }
}
function check(a,b)
{
    console.log("test")
    for(x = 0; x < names.length; x++)
    {
        if(a == names[x])
        {
            alert("Username already taken");
            return false;
        }
        if(b == user_names[x])
        {
            alert("Email already taken");
            return false;
        }
    }
    return true;
}

function log_in()
{
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;

    for(x = 0; x < names.length; x++)
    {
        if((a == names[x]) && (b == user_names[x]) && (c == passwords[x]))
        {
            window.location.href="landing_page.html"+window.location.href;
        }
    }
}


var  names = [];
var  user_names = [];
var  passwords = [];
