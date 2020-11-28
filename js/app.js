let firstPTag = document.querySelector("p");
firstPTag.style.fontSize ="2rem";

let allPTags =document.querySelectorAll("p");
for(var index = 0; index<allPTags.length; i++) {
    allPTags[index].style.color = "silver"
}

let articleTitle = document.getElementById("first-tweet");
articleTitle.style.color ="aquamarine"

let timeClass = document.getElementsByClassName("time");
for(var index = 0; index<timeClass.length; i++) {
    timeClass[index].style.color = "gold"
}

let thumbnail = document.getElementsByTagName("thumbnail");
for(var index = 0; index<thumbnail.length; i++) {
    thumbnail[index].style.width = "50%";
}

let newPTag = document.createElement("p");
let newTextNode = document.createTextNode("I don't stop, like the crab of my zodiac, i have a different approach :D !");
newPTag.appendChild(newTextNode);
document.getElementById("first-tweet").append(newPTag);

let firsttweet = document.getElementById("first-tweet");
firsttweet.removeChild(articleTitle);

firsttweet.classList.add("firsttweet");

let thumbnail = document.getElementById("thumbnail");
thumbnail.classList.remove("h4");

let timeClass = document.getElementsByClassName("time");
timeClass.classList.toggle("time");