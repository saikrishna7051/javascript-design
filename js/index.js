var container=document.querySelector("#root")
var card=document.createElement("div");
card.setAttribute("id","card");
container.appendChild(card);
//subchilofparent
var image=document.createElement("img");
image.src="../profile.svg";
image.alt="image";
image.style.width="20%";
card.appendChild(image) ;