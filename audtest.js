function abut() {
    video.audioTracks[0].enabled = true;
    video.audioTracks[1].enabled = false;
}
function bbut() {
    video.audioTracks[0].enabled = false;
    video.audioTracks[1].enabled = true;
}
function cbut() {
    alert("You pressed button C");
}

var slida = document.getElementById("aslid");
var opa = document.getElementById("la");
slida.oninput = function() {
  opa.value = this.value;
}
var slidb = document.getElementById("bslid");
var opb = document.getElementById("lb");
slidb.oninput = function() {
  opb.value = this.value;
}
var slidc = document.getElementById("cslid");
var opc = document.getElementById("lc");
slidc.oninput = function() {
  opc.value = this.value;
}