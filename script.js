function tn() {
  document.getElementById('nl').classList.toggle('open');
}

function cn(id) {
  document.getElementById('nl').classList.remove('open');
}

document.addEventListener('click', function(e) {
  var nl = document.getElementById('nl');
  var hb = document.getElementById('hb');
  if (!nl.contains(e.target) && !hb.contains(e.target)) {
    nl.classList.remove('open');
  }
});