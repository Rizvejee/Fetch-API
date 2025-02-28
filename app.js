const url = "https://api.thecatapi.com/v1/images/search?limit=10"

const getpic = async () =>{
let response = await fetch (url);
let data = await response.json();
console.log(data)
document.getElementById("image").src = data[0].url
}
