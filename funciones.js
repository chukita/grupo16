function suma(){
    var puntos = Number(document.getElementById("puntos").innerHTML);
    //console.log("Tus puntos son: " + puntos);
    var suma = puntos + 1;
    document.getElementById("puntos").innerHTML = suma;

}

function calcular(){
    var puntos = Number(document.getElementById("puntos").innerHTML);

    if(puntos>=10){
        alert("suficiente!!!");
    } else {
        alert("todavía falta");
    }
}