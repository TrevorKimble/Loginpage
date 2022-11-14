function add_info(input)
{
    let pass = true;
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;
    pass = check(a,b);
    if(pass === true)
    {
        names.push(a);
        user_names.push(b);
        passwords.push(c);
    }
    console.log(names);
}
function check(a,b)
{
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
    console.log(names);
    let a = document.getElementById("name2").value;
    let b = document.getElementById("email2").value;
    let c = document.getElementById("password2").value;

    for(x = 0; x < 100; x++)
    {
        if((a == names[x]) && (b == user_names[x]) && (c == passwords[x]))
        {
            window.location.href="landing_page.html"+window.location.href;
        }
        else{
            console.log("fail");
        }
    }
}


var  names = [];
var  user_names = [];
var  passwords = [];
