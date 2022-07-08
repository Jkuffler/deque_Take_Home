const resultsList = document.getElementById("list-output");
const volumeUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const aKey = "AIzaSyBxFPi1cP6NOlvllPSvAcGpZr0afgV19wk"
const placeholder = "<img src='../resources/elena-joland-unsplash.jpg' alt='Default Cover'>"
let responseTime, authors, publishDates, publisher, contentLink, coverImg, volumeLink, totalResults;
let searchResults;

const searchTerms = document.getElementById("search")

const getResults = function() {
  resultsList.innerHTML = "";
  searchResults = searchTerms.val
}

function renderResult(result) {

}

function getTotalResults() {
fetch(volumeUrl)
.then( r => r.json() )
.then( searchResults => searchResults.forEach( result => renderResult(result) ))

}
