function reset(formulario) {
    document.getElementById('formulario').reset();
    document.getElementById('total-pagar').innerText = ("Total a pagar $");

}

let cantidadTickets = 0;
console.log(cantidadTickets);

function totalPagar() {

    cantidadTickets =Number (document.getElementById('cantidad').value);
    console.log(cantidadTickets);
    console.log(document.getElementById('cantidad').value);

    let clienteReg = String (document.getElementById('cliente').value);
    console.log(document.getElementById('cliente').value);

    

   
    
    switch (clienteReg) {
        case "estudiante":
            let total1 = Number (200 * (20/100) * cantidadTickets);
            console.log(total1);
            document.getElementById("total-pagar").innerText = ("Total a pagar $" + total1);
        break;

        case "trainee":
            let total2 = Number (200 * (50/100) * cantidadTickets);
            console.log(total2);
            document.getElementById("total-pagar").innerText = ("Total a pagar $" + total2);
        break;

        case "junior":
            let total3 = Number (200 * (85/100) * cantidadTickets);
            console.log(total3);
            document.getElementById("total-pagar").innerText = ("Total a pagar $" + total3);
        break;

        default:
            console.log("Nunca verás este mensaje");
            break;
    }

    



}