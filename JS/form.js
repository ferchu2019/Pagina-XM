

function validation() {


    //valido nombre
    if (document.formu01.nya.value.length == 0) {
        alert("Por favor escriba un nombre valido")
        document.formu01.nya.focus();
        return 0;
    }
 
    //valido mail
    input = document.formu01.mail;
    var validCharac = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input.value.match(validCharac)) {
        alert("Por favor, introduzca un email valido")
        document.formu01.mail.focus();
        return 0;
    }

    //valido telefono
    if (document.formu01.tel.value.length == 0) {
        alert("Por favor ingrese un teléfono");
        document.formu01.tel.focus();
        return 0;
    }

    //valido mensaje
    if (document.formu01.mnsj.value.length == 0) {
        alert("Por favor escriba un mensaje.");
        document.formu01.mnsj.focus();
        return 0;
    }
 
        enviar()
 
}

function enviar(){
    alert("Email enviado con exito!");
    document.formulario.submit();
}
