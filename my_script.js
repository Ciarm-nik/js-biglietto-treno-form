// Abbiamo 3 input:
// - nome-utente
// - km
// -fascia-eta
// Dobbiamo generare 5 output
// - nomePasseggero
// -offerta
// -carrozza
// -codice_cp
// costo_biglietto


var bottomGenerate = document.getElementById("genera");
bottomGenerate.addEventListener("click",

    function (event) {
        event.preventDefault()

        var nomePasseggero = document.getElementById("name").value;
        document.getElementById("nomePasseggero").innerHTML = nomePasseggero;

        var wagonNumber = Math.floor(Math.random() * 9) + 1;
        document.getElementById("carrozza").innerHTML = wagonNumber;

        var cpCode = Math.floor(Math.random() * 10000) + 90000;
        document.getElementById("codice_cp").innerHTML = cpCode;

        var km = document.getElementById("km").value;

        var age = document.getElementById("fascia-eta").value;

        // Calcolo prezzo del biglietto

        var prezzoAlKilometro = 0.21;

        var prezzoBigliettoSenzaSconto = prezzoAlKilometro * km

        var offerta = "Tariffa Standard"

        var discount;

        if (age == "minorenne") {
            discount = prezzoBigliettoSenzaSconto * 0.20;
            offerta = "Sconto Minorenne"
        } else if (age == "over65") {
            discount = prezzoBigliettoSenzaSconto * 0.40;
            offerta = "Sconto over 65";
        } else {
            discount = 0
            prezzoBigliettoSenzaSconto;
        }

        var prezzoFinale = prezzoBigliettoSenzaSconto - discount

        document.getElementById("costo-biglietto").innerHTML = prezzoFinale.toFixed(2) + " €";

        document.getElementById("offerta").innerHTML = offerta;

        // Animazione sezione ticket
        var biglietto = document.getElementById("container_bottom");
        biglietto.classList.remove("hidden");
        biglietto.classList.add("show");
    }
)