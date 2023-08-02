let paragraph = document.getElementById("p-div");
let image = document.getElementById("img-div");

let paragraphButton = document.getElementById("p-button");
let imageButton = document.getElementById("img-button");

paragraphButton.onclick = function()
{
    let newParagraph = document.createElement("p");
    newParagraph.style["background-color"] = "black";
    newParagraph.style["padding"] = "10px";
    newParagraph.innerHTML = "Hello there";
    newParagraph.style["color"] = "white";
    paragraph.appendChild(newParagraph);
    paragraph.style.display = "block";
    image.style.display = "none";
}

imageButton.onclick = function()
{
    let newImg = document.createElement("img");
    newImg.src = "all_star_code_logo.png";
    image.appendChild(newImg);
    image.style.display = "block";
    paragraph.style.display = "none";
}