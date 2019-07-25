var fillouterbox = document.getElementById("outerbox");

for (var i = 0; i < pets.length; i++) {
	fillouterbox.innerHTML += `<div class="content"><img src="${pets[i].image}"><p>${pets[i].name}</p><button class="knopf" id="${i}">More Info</button>`;

}


var knopf = document.getElementsByClassName("knopf")

for (var i = 0; i < knopf.length; i++) {
	knopf[i].addEventListener("click", function(){showinfo(this.getAttribute("id"))}, false);
}

function showinfo(i){
	document.getElementById("infobox").innerHTML = `<div class="content"><img src="${pets[i].image}"><p>${pets[i].name}</p><p>${pets[i].animal}</p><p>${pets[i].color}</p><p>${pets[i].price}</p>`;

}


