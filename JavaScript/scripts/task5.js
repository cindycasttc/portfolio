let today = new Date();
let weekDay = today.getDay();
let message;
if (weekDay == 1 || weekDay == 2 || weekDay == 3 || weekDay == 4 || weekDay == 5) {
    message = "Hang in there!";
}
else {
    message = "Woohoo!  It is the weekend!";
}
let anotherMessage;
switch(weekDay) {
    case 0:
        anotherMessage = "Sunday";
      break;
    case 1:
        anotherMessage = "Monday";
      break;
    case 2:
        anotherMessage = "Tuesday";
      break;
    case 3:
        anotherMessage = "Wednesday";
      break;
    case 4:
        anotherMessage = "Thursday";
      break;
    case 5:
        anotherMessage = "Friday";
      break;
    case 6:
        anotherMessage = "Saturday";
      break;
  }
document.querySelector("#message1").textContent = message;
document.querySelector("#message2").textContent = anotherMessage;
const temples = [];
const output = (templesFunction) => {
  templesFunction.map((temple) => {  
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const h41 = document.createElement("h41");
  const templeImage = document.createElement("img");
    h3.textContent = temple.templeName;
    h4.textContent = temple.location;
    h41.textContent = temple.dedicated;
    templeImage.src = temple.imageUrl;
    templeImage.setAttribute("alt", temple.templeName);
  article.append(h3);
  article.append(h4);
  article.append(h41);
  article.append(templeImage);
document.getElementById("temples").append(article);
}
)}


 fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
  .then((response) => response.json())
  .then((templess) => {
    templess.map((variable) => temples.push(variable));
    output(templess);
  });

const reset = () => {
  document.querySelector("#temples").innerHTML = "";
};
const sortBy = () => {
   reset();
   const sort = document.getElementById("sortBy").value;
   if (sort === "templeNameAscending") {
    const reverse = temples.reverse();
    output(reverse);
   }
   if (sort === "templeNameDescending") {
    const reverse = temples.reverse();
    output(reverse);
   };
};
document.getElementById("sortBy").addEventListener("change",() => sortBy());