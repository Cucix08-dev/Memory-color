const bottoneFacile = document.getElementById("facile");
const bottoneMedio = document.getElementById("medio");
const bottoneDifficile = document.getElementById("difficile");
const bottoneImpossibile = document.getElementById("impossibile");
const bottoneDio = document.getElementById("dio");

bottoneFacile.addEventListener("click", () => {
    localStorage.setItem("difficolta","1");
});
bottoneMedio.addEventListener("click", () => {
    localStorage.setItem("difficolta","2");
});
bottoneDifficile.addEventListener("click", () => {
    localStorage.setItem("difficolta","3");
});
bottoneImpossibile.addEventListener("click", () => {
    localStorage.setItem("difficolta","4");
});
bottoneDio.addEventListener("click", () => {
    localStorage.setItem("difficolta","5");
});