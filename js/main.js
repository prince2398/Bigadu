var desc = {
  interaction:
    ' Interaction design, often abbreviated as IxD, is "the practice of designing interactive digital products, environments, systems, and services." Beyond the digital aspect, interaction design is also useful when creating physical products, exploring how a user might interact with it ',
  physical:
    "The physical design is the process of transforming a circuit description into the physical layout, which describes the position of cells and routes for the interconnections between them.",
  visual:
    "Visual design is the use of imagery, color, shapes, typography, and form to enhance usability and improve the user experience. Visual design as a field has grown out of both UI design and graphic design.",
  services:
    "Service design is the activity of planning and organizing people, infrastructure, communication and material components of a service in order to improve its quality and the interaction between the service provider and its customers."
};

function loadPage(href) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}

function changeContent(section) {
  document.getElementById("content").innerHTML = loadPage(section + ".html");
  document.title = section.charAt(0).toUpperCase() + section.slice(1);
  closeMenu();
}

function changeDesc(design) {
  document.getElementById("design-desc").innerHTML = desc[design];
}
function clearDesc(){
  document.getElementById("design-desc").innerHTML = "";
}
function openMenu() {
  document.getElementById("menu").style.display = "inline";
  document.getElementById("main").style.top = "10vh";
  document.getElementById("main").style.transform = "scale(0.9)";
  document.getElementById("main").style.borderRadius = "1vw";
  document.getElementById("menu-button").innerHTML =
    "<i class='material-icons' onclick='closeMenu()'>clear</i>";
}

function closeMenu() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("main").style.top = 0;
  document.getElementById("main").style.transform = "scale(1)";
  document.getElementById("main").style.borderRadius = 0;
  document.getElementById("menu-button").innerHTML =
    "<i class='material-icons' onclick='openMenu()'>menu</i>";
}
