const aKey = "AIzaSyBxFPi1cP6NOlvllPSvAcGpZr0afgV19wk"
const title = document.getElementById("#title");
const resultsList = document.getElementById("list-output");
const volumeUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const placeholder = "<img src='../resources/elena-joland-unsplash.jpg' alt='Default Cover'>"
const searchTerms = document.getElementById("#search")

let volume, responseTime, authors, publishDates, publisher, coverImg, volumeLink, searchParams; 

searchTerms.addEventListener("click", getResults )

const getResults = function() {
  resultsList.innerHTML = "";
  searchParams = searchTerms.value;
  if(searchParams === "" || searchParams === null) {
    alert("Please enter valid search terms")
  } else {
    fetch( volumeUrl+searchParams )
    .then( res => res.json() )
    .then (searchResults => searchResults.forEach( result => renderResult(result) ))
    }
}
console.log(searchResults)



function renderResult(result) {
  if (result === undefined || result === null) {
    alert("No matches found for the provided search term(s)");
  } else {
    title.animate({'marginTop': '5px'}, 1000);

  }
}

function getTotalResults() {
fetch(volumeUrl)
.then( r => r.json() )
.then( searchResults => searchResults.forEach( result => renderResult(result) ))

}