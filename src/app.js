const aKey = "AIzaSyBxFPi1cP6NOlvllPSvAcGpZr0afgV19wk"
let resultsList = document.getElementById("list-output");
const volumeUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const placeholder = "<img src='../resources/elena-joland-unsplash.jpg' alt='Default Cover'>"
let volumeTitle, responseTime, authors, publishDates, publisher, coverImg, volumeLink, searchParams; 

document.querySelector("button").addEventListener("click", getResults)

function getResults () {
  resultsList.innerHTML = "";
  searchParams = document.getElementById("#search-box").value;
  if(searchParams === "" || searchParams === null) {
    alert("Please enter valid search terms")
  } else {
    fetch( volumeUrl+searchParams )
    .then( res => res.json() )
    .then (searchResults => console.table(searchResults) )  /*searchResults.forEach( volume => renderVolume(volume) )*/
    }
}
// console.log(searchResults)

function renderVolume(volume) {
  if (volume === undefined || volume === null) {
    alert("No matches found for the provided search term(s)");
  } else {
    title.animate({'marginTop': '5px'}, 1000);

  }
}