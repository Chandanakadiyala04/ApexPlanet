async function getJoke() {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
  const data = await res.json();
  document.getElementById("joke").textContent = data.joke;
}
