let movieName = document.getElementById("movie-name");
let moviePlot = document.getElementById("movie-plot");
let search_btn = document.getElementById("search_btn");
let movieInput = document.getElementById("movie-input");

search_btn.addEventListener("click", () => {
  let movie = movieInput.value;
  if (movie) {
    getMovieData(movie).then((data) => {
      movieName.innerText = data.title;
      moviePlot.innerText = data.plot;
    });
  } else {
    alert("please enter movie name");
  }
});
async function getMovieData(movie) {
  let apiKey = "d2f0e2a7";
  let apiUrl = `http://www.omdbapi.com/?t=${movie}&apiKey=${apiKey}`;

  try {
    let response = await fetch(apiUrl);
    console.log(response);
    let data = await response.json();
    console.log(data);
    return {
      title: data.Title,
      plot: data.Plot,
    };
  } catch (error) {}
}
