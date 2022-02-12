/*ANIMACION AL TERMINO DE CARGA DE PAGINA*/
window.addEventListener("load",function(){
    let menu = document.getElementById("MenuNavegacion");
    let span1 = document.getElementById("texto1");
    let parrafo2 = document.getElementById("texto2");
    let span2 = document.getElementById("texto3");

    menu.style.top="0px";
    menu.style.opacity="1";

    span1.style.transform="scale(1,1)";
    parrafo2.style.transform="scale(1,1)";

    span2.style.opacity="1";

    
})

/*MOSTRAR ELEMENTOS DE PAGINA*/
window.addEventListener('scroll',function(){
    var alturaPantalla = window.innerHeight;
    var anchoPantalla = window.innerWidth;

    let WebBasico = document.getElementById("PaqueteWebBasico");
    let WebMedio = document.getElementById("PaqueteWebMedio");
    let WebCompleto = document.getElementById("PaqueteWebServicioCompleto");
    let WebCarrito = document.getElementById("PaqueteWebCarritoCompras");
    let PuntoBasico = document.getElementById("PaquetePuntoBasico");
    let PuntoPlata = document.getElementById("PaquetePuntoPremiunPlata");
    let PuntoOro = document.getElementById("PaquetePuntoPremiunOro");
    let Actualizacion_1 = document.getElementById("Actualizacion1");
    let Actualizacion_2 = document.getElementById("Actualizacion2");
    var btnSubir = document.getElementById("brn_Subir");

    let distanciaWebBasico = WebBasico.getBoundingClientRect().top;
    let distanciaWebMedio = WebMedio.getBoundingClientRect().top;
    let distanciaWebCompleto = WebCompleto.getBoundingClientRect().top;
    let distanciaWebCarrito = WebCarrito.getBoundingClientRect().top;
    let distanciaPuntoBasico = PuntoBasico.getBoundingClientRect().top;
    let distanciaPuntoPlata = PuntoPlata.getBoundingClientRect().top;
    let distanciaPuntoOro = PuntoOro.getBoundingClientRect().top;
    let distanciaActualizacion_1 = Actualizacion_1.getBoundingClientRect().top;
    let distanciaActualizacion_2 = Actualizacion_2.getBoundingClientRect().top;
    let distanciaPagPrecios=document.getElementById("PagPrecios").getBoundingClientRect().top;

    if (distanciaPagPrecios<=(alturaPantalla/1.3)) {
        btnSubir.style.transform="scale(1,1)";
    }else{
        btnSubir.style.transform="scale(0,0)";
    }

    if (distanciaWebBasico<=(alturaPantalla/1.5)) {
        WebBasico.style.left="0px";
        WebBasico.style.opacity="1";
    }else{
        WebBasico.style.left="50px";
        WebBasico.style.opacity="0";
    }

    if (distanciaWebMedio<=(alturaPantalla/1.5)) {
        WebMedio.style.left="0px";
        WebMedio.style.opacity="1";
    }else{
        WebMedio.style.left="50px";
        WebMedio.style.opacity="0";
    }

    if (distanciaWebCompleto<=(alturaPantalla/1.5)) {
        WebCompleto.style.left="0px"
        WebCompleto.style.opacity="1";
    }else{
        WebCompleto.style.left="50px";
        WebCompleto.style.opacity="0";
    }

    if (distanciaWebCarrito<=(alturaPantalla/1.5)) {
        WebCarrito.style.left="0px"
        WebCarrito.style.opacity="1";
    }else{
        WebCarrito.style.left="50px";
        WebCarrito.style.opacity="0";
    }

    if (distanciaPuntoBasico<=(alturaPantalla/1.5)) {
        PuntoBasico.style.left="0px"
        PuntoBasico.style.opacity="1";
    }else{
        PuntoBasico.style.left="50px";
        PuntoBasico.style.opacity="0";
    }

    if (distanciaPuntoPlata<=(alturaPantalla/1.5)) {
        PuntoPlata.style.left="0px"
        PuntoPlata.style.opacity="1";
    }else{
        PuntoPlata.style.left="50px";
        PuntoPlata.style.opacity="0";
    }

    if (distanciaPuntoOro<=(alturaPantalla/1.5)) {
        PuntoOro.style.left="0px"
        PuntoOro.style.opacity="1";
    }else{
        PuntoOro.style.left="50px";
        PuntoOro.style.opacity="0";
    }

    if (distanciaActualizacion_1<=(alturaPantalla/1.5)) {
        Actualizacion_1.style.left="0px"
        Actualizacion_1.style.opacity="1";
    }else{
        Actualizacion_1.style.left="50px";
        Actualizacion_1.style.opacity="0";
    }

    if (distanciaActualizacion_2<=(alturaPantalla/1.5)) {
        Actualizacion_2.style.left="0px"
        Actualizacion_2.style.opacity="1";
    }else{
        Actualizacion_2.style.left="50px";
        Actualizacion_2.style.opacity="0";
    }


})

/*MOSTRAR REDES SOCIALES*/
document.getElementById("btn_Face").style.top="85vh";
document.getElementById("btn_Menu_Redes").addEventListener("click",function(){
    
    if(document.getElementById("btn_Face").style.top == "85vh"){
        document.getElementById("btn_Face").style.transform="scale(1,1)";
        document.getElementById("btn_What").style.transform="scale(1,1)";
        document.getElementById("btn_Email").style.transform="scale(1,1)";

        document.getElementById("btn_Face").style.top="75vh";
        document.getElementById("btn_What").style.top="67vh";
        document.getElementById("btn_Email").style.top="59vh";
        document.getElementById("btn_Menu_Redes").style.color="var(--c5)";
    }else{
        document.getElementById("btn_Face").style.transform="scale(0,0)";
        document.getElementById("btn_What").style.transform="scale(0,0)";
        document.getElementById("btn_Email").style.transform="scale(0,0)";

        document.getElementById("btn_Face").style.top="85vh";
        document.getElementById("btn_What").style.top="85vh";
        document.getElementById("btn_Email").style.top="85vh";
        document.getElementById("btn_Menu_Redes").style.color="#fff";

    }
})
    