const resultsList = document.getElementById("results");
const volumeUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const aKey = "AIzaSyBxFPi1cP6NOlvllPSvAcGpZr0afgV19wk"
const placeholder = document.createElement("IMG");
placeholder.setAttribute("src","../resources/elena-joland-unsplash.jpg");
placeholder.setAttribute("alt","Default Cover");
let responseTime, authors, publishDates, coverImg, volumeLink;
let totalResults;

const search = document.getElementById("search")

const getResults = function() {
  resultsList.innerHTML = "";
  totalResults = search.val
}