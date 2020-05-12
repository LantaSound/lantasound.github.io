console.log("load");

//  How i would write the accordion function
let accordion = document.getElementById("accordionTrigger");
accordion.addEventListener("click", function(element) {
  let target = element.target || element.srcElement;
  target.classList.toggle("change");
  let panel = document.getElementById("panel");
  panel.classList.toggle("heightZero");
});