console.log("hola javascript del lado del cliente ")

let button= document.getElementById('boton-ocultar');

function hideImage(){
    let imageLogo= document.getElementById('logo-fing');
    imageLogo.style='display:none';
}
button.onclick= hideImage;