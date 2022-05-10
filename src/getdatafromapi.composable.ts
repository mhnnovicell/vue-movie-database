// mouse.js
import { ref } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// by convention, composable function names start with "use"
export function getMovieData() {
  // state encapsulated and managed by the composable

  let searchText = ref('');
  let movieData = ref(null);
  let searchApiUrl = ref('');
  // a composable can update its managed state over time.
  function getMovieFromApi(searchText) {
    let self = this;
    this.searchApiUrl = 'https://www.omdbapi.com/?apikey=89ea98eb&t=';

    axios.get(self.searchApiUrl + self.searchText).then((response) => {
      self.movieData = response.data;
    });
  }

  // expose managed state as return value
  return { getMovieFromApi, searchText, movieData, searchApiUrl };
}
