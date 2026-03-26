function gridforDiff(diff, c){
    if(diff === 1){
        c.classList.add("container-colori-facile");
    }
    else if(diff === 2){
        c.classList.add("container-colori-medio");
    }
    else if(diff >= 3){
        c.classList.add("container-colori-difficile-p");
    }
}

const difficolta = Number(localStorage.getItem("difficolta"));

let colori = ["bianco", "rosa", "rosso", "arancione", "giallo", "verde", "azzurro", "blu", "viola", "nero"];
let sequenzaColori = [];

const container = document.getElementById("container-colori");
const containerUtente = document.getElementById("container-colori-utente");
const playRetry = document.getElementById("play-retry");
const timer = document.getElementById("timer");
const warningMessage = document.getElementById("warningMessage");

let iter = 0;

const textDiff = document.getElementById("difficolta");
function diff() {
    if (difficolta === 1) return "facile";
    if (difficolta === 2) return "medio";
    if (difficolta === 3) return "difficile";
    if (difficolta === 4) return "impossibile";
    if (difficolta === 5) return "dio";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
textDiff.textContent = capitalize(diff());
textDiff.className = diff();

const score = document.getElementById("score");

const partitaVS = document.getElementById("partita_VS");

playRetry.addEventListener("click", () => {
    iter = 0;
    let colorsN = Math.ceil(Math.random() * difficolta) + difficolta;
    playRetry.classList.add("hidden");
    timer.classList.remove("hidden")
    container.classList.remove("hidden");
    container.classList.add("colors-notHidden");
    container.innerHTML = "";
    gridforDiff(difficolta,container);
    warningMessage.classList.remove("hidden");
    partitaVS.textContent = "";
    partitaVS.className = "undertale"

    let i = 3;
    timer.textContent =  i;
    i--;
    const timerInter = setInterval(() => {
        timer.textContent =  i;
        i--;

        if (i < 0) {
            clearInterval(timerInter);
            timer.classList.add("hidden");
            container.classList.add("hidden");
            containerUtente.classList.remove("hidden");
            containerUtente.classList.add("colors-notHidden")
            warningMessage.classList.add("hidden");
            score.classList.remove("hidden")
            score.textContent = iter + "/" + sequenzaColori.length;
        }
    }, 1000);

    for (let i = 0; i < colorsN; i++) {
        sequenzaColori[i] = colori[Math.floor(Math.random() * colori.length)];

        let nuovoColore = document.createElement("div")
        nuovoColore.classList.add(sequenzaColori[i]);
        nuovoColore.classList.add("colore");
        nuovoColore.classList.add("undertale");
        nuovoColore.textContent = i + 1;

        container.appendChild(nuovoColore);
    }
});

containerUtente.addEventListener("click", (e) => {
    const clicked = e.target;

    if (!clicked.classList.contains("colore")) return;

    if (clicked.classList.contains(sequenzaColori[iter])) {
        iter++;
        score.textContent = iter + "/" + sequenzaColori.length;

        if (iter === sequenzaColori.length) {
            playRetry.classList.remove("hidden");
            playRetry.textContent = "Retry";

            containerUtente.classList.add("hidden");
            containerUtente.classList.remove("colors-notHidden");

            score.classList.add("hidden");

            partitaVS.textContent = "HAI VINTO!";
            partitaVS.classList.add("vinto");

        }
    } else {
        iter = 0;

        playRetry.classList.remove("hidden");
        playRetry.textContent = "Retry";

        containerUtente.classList.add("hidden");
        containerUtente.classList.remove("colors-notHidden");

        score.classList.add("hidden");

        partitaVS.textContent = "Hai perso...";
        partitaVS.classList.add("perso");

    }
});

const back = document.getElementById("back");

back.addEventListener("click", () => {
    window.location.href = "index.html";
});