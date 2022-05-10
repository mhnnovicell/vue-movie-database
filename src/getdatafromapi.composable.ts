// mouse.js
import { ref } from 'vue';

// by convention, composable function names start with "use"
export function getMovieData() {
  // state encapsulated and managed by the composable

  const searchApiUrl = ref('');
  const searchText = ref('');
  const errorText = ref('');
  const movieData = ref(null);

  // a composable can update its managed state over time.
  function getMovieFromApi(searchText) {
    this.searchApiUrl = 'https://www.omdbapi.com/?apikey=89ea98eb&t=';

    fetch(this.searchApiUrl + this.searchText)
      .then((response) => response.json())
      .then((data) => (this.movieData = data))
      .catch((error) => {
        console.log(error);
        this.errorText = error;
      });
  }

  // expose managed state as return value
  return { searchApiUrl, getMovieFromApi, searchText, movieData };
}
