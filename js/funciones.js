var divNoches=document.getElementById("noches");
divNoches.addEventListener("click",mostrarNoches,false);
function mostrarNoches()
{
    divNoches.insertAdjacentHTML("beforeend","<div><h3>Comunes</h3><div id='nochesCom'><p>4 Noches</p><p>7 Noches</p><p>10 Noches</p>"
    +"<p>14 Noches</p></div><h3>Diarias</h3><div id='numNoches'><p>1 Noche</p><p>2 Noches</p><p>3 Noches</p><p>4 Noches</p>"
    +"<p>5 Noches</p><p>6 Noches</p><p>7 Noches</p><p>8 Noches</p></div></div>");
    divNoches.removeEventListener("click",mostrarNoches,false);
}