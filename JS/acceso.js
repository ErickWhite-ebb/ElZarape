function login()
{
    let user = document.getElementById("txtUSR").value;
    let password = document.getElementById("txtPASS").value;
    
    if(user == "admin" && password == "admin")
    {
        location.href="https://erickwhite-ebb.github.io/ElZarape/HTML/principal.html";
    }
    else
    {
        Swal.fire
        ({
            title:"Acceso Denegado",
            text: "Usuario o contraseña incorrecta",
            icon:"error"
        });
        document.getElementById("txtUSR").value="";
        document.getElementById("txtPASS").value="";
    }
}
