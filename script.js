document.getElementById("reset").disabled = true;
document.getElementById("stop").disabled = true;

var mili = 0;
var seg = 0;
var min = 0;
var hora = 0;
function ativar() {
  document.getElementById("txt").innerHTML = "Contando";

  document.getElementById("reset").disabled = false;
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("start").innerHTML = "Iniciar";

  tempo = setInterval(() => {
    mili = parseInt(mili) + 1;
    if (mili >= 10) {
      seg++;
      mili = 0;
    }
    if (seg >= 60) {
      min++;
      seg = 0;
    }
    if (min >= 60) {
      hora++;
      min = 0;
    }
    document.getElementById("tempo").innerHTML =
      parseInt(hora) +
      ":" +
      parseInt(min) +
      ":" +
      parseInt(seg) +
      ":" +
      parseInt(mili);
  }, 100);
}
function parar() {
  clearInterval(tempo);
  //document.getElementById("tempo").innerHTML = 0;
  document.getElementById("txt").innerHTML = "Parou";
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("start").innerHTML = "Continuar";
}
function reset() {
  clearInterval(tempo);
  document.getElementById("tempo").innerHTML = "0:0:0:0";
  document.getElementById("txt").innerHTML = "Resetou";
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = true;
  document.getElementById("start").innerHTML = "Iniciar";
  document.getElementById("stop").disabled = true;
  mili = 0;
  seg = 0;
  min = 0;
  hora = 0;
}
