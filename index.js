const element = document.querySelector("main#main");
element.parentElement.removeChild(element);

let newHeader = document.createElement("h1");
newHeader.innerHTML = `<h1>Aidan is the champion</h1>`;
newHeader.setAttribute("id", "victory");

document.body.appendChild(newHeader);