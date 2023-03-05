document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


var modal1 = document.getElementById("modal-container1");
var modal2 = document.getElementById("modal-container2");
var modal3 = document.getElementById("modal-container3");
var modal4 = document.getElementById("modal-container4");
var modal5 = document.getElementById("modal-container5");

var complink = document.getElementById("comp-image");
var nvidia = document.getElementById("nvidia-image");
var arduino = document.getElementById("arduino-expo-image");
var kinova = document.getElementById("Kinova-image");
var bootcamp = document.getElementById("bootcamp-image");


var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];

complink.onclick = function(){
  modal1.style.display = "block";
}
nvidia.onclick = function(){
  modal2.style.display = "block";
}
arduino.onclick = function(){
  modal3.style.display = "block";
}
kinova.onclick = function(){
  modal4.style.display = "block";
}
bootcamp.onclick = function(){
  modal5.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
  else if (event.target == modal4) {
    modal4.style.display = "none";
  }
  else if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
