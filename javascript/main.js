// Abrir modal com imagem do portfolio
function onClick(n) {

  if(n == 1){
    document.getElementById("img01").src = 'img/ODwyerAdvogadosScreenshot.jpg';
  } else if(n == 2){
    document.getElementById("img01").src = 'img/juscontentoScreenshot.png';
  } else if(n == 3){
    document.getElementById("img01").src = 'img/CircuitoBaianodeDireitodasFamíliasScreenshot.jpg';
  }
  
  document.getElementById("modal01").style.display = "block";
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}