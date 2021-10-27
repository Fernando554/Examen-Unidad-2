function calcularMonto(){
    var monto = document.getElementById("Horas").value;

    if(monto <= 5)
    {
        alert ("Debe pagar 100$");
    } 
    if(monto >= 6)
    {
        alert ("Debe pagar 500$");
    }
}



