// mouse.js
import { ref } from 'vue';

// by convention, composable function names start with "use"
export function getMovieData() {
  // state encapsulated and managed by the composable

  const searchText = ref('');
  const movieData = ref(null);

  // a composable can update its managed state over time.
  function getMovieFromApi(event) {
    var searchApiUrl = 'https://www.omdbapi.com/?apikey=89ea98eb&t=';

    fetch(searchApiUrl + searchText)
      .then((response) => response.json())
      .then((data) => (this.movieData = data));

    return searchApiUrl;
  }

  // expose managed state as return value
  return { getMovieFromApi, searchText, movieData };
}
