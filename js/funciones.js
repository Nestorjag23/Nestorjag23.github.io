var fecha=new Date();
var anio=fecha.getFullYear();
var mes=fecha.getMonth()+1;
var dia=fecha.getDay()-1;
if(mes<10)
{
    mes="0"+mes;
}
if(dia<10)
{
    dia="0"+dia;
}
var caledario= document.getElementById("calendario");
calendario.min=anio+"-"+mes+"-"+dia;


var divNoches=document.getElementById("noches");
divNoches.addEventListener("click",mostrarNoches,false);
function mostrarNoches()
{
    divNoches.insertAdjacentHTML("beforeend","<div><h3>Comunes</h3><div id='nochesCom'><p>4 Noches</p><p>7 Noches</p><p>10 Noches</p>"
    +"<p>14 Noches</p></div><h3>Diarias</h3><div id='numNoches'><p>1 Noche</p><p>2 Noches</p><p>3 Noches</p><p>4 Noches</p>"
    +"<p>5 Noches</p><p>6 Noches</p><p>7 Noches</p><p>8 Noches</p></div></div>");
    divNoches.removeEventListener("click",mostrarNoches,false);
}



