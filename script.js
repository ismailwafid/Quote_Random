const quote = document.getElementById("quote")
const author = document.getElementById("author")



const api_url = "https://api.quotable.io/random";

async function getQuot(url) {
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content
  author.innerHTML = data.author

}
getQuot(api_url);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML)
}

