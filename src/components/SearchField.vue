<template>
  <div class="flex w-full flex-col flex-wrap justify-start self-start">
    <div class="flex w-full flex-col md:w-1/2 md:flex-row">
      <input
        type="text"
        placeholder="Search for movie or series"
        class="input input-bordered w-full max-w-xs"
        v-model="searchText"
      />
      <button
        class="btn btn-primary mb-4 mt-4 md:ml-4 md:mt-0"
        @click="getMovieFromApi(this.searchText)"
        aria-label="Search"
      >
        Search
      </button>
    </div>

    <div v-if="movieData" class="mt-4">
      <div
        class="card mt-4 max-w-md bg-base-100 shadow-xl"
        v-if="movieData.Response === 'True'"
      >
        <figure>
          <img
            :src="movieData.Poster"
            :alt="movieData.Title"
            class="h-full w-full object-cover object-center"
          />
        </figure>
        <div class="card-body text-white">
          <h2 class="card-title">
            {{ movieData.Title }}
            <div class="badge badge-primary">{{ movieData.Year }}</div>
          </h2>
          <p>{{ movieData.Plot }}</p>
          <div class="card-actions mt-4 justify-end">
            <div class="badge badge-primary">{{ movieData.Genre }}</div>
          </div>
          <h3>IMDB Rating</h3>
          <star-rating
            :rating="parseFloat(movieData.imdbRating)"
            :max-rating="10"
            :round-start-rating="false"
            :star-size="20"
          ></star-rating>
          <div class="mt-4 flex flex-wrap">
            <div class="w-full p-2 sm:w-1/2" v-if="movieData.Rated">
              <div
                class="flex h-full flex-col flex-wrap items-center justify-center self-center rounded bg-indigo-500 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-6 w-6 flex-shrink-0 text-center text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 class="text-center text-xl text-white">Rated</h2>
                <span class="text-center text-sm text-white">{{
                  movieData.Rated
                }}</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2" v-if="movieData.Actors">
              <div
                class="flex h-full flex-col flex-wrap items-center justify-center self-center rounded bg-indigo-500 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-6 w-6 flex-shrink-0 text-center text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h2 class="text-center text-xl text-white">Actors</h2>
                <span class="text-center text-sm text-white">{{
                  movieData.Actors
                }}</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2" v-if="movieData.Awards">
              <div
                class="flex h-full flex-col flex-wrap items-center justify-center self-center rounded bg-indigo-500 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-6 w-6 flex-shrink-0 text-center text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <h2 class="text-center text-xl text-white">Awards</h2>
                <span class="text-center text-sm text-white">{{
                  movieData.Awards
                }}</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2" v-if="movieData.Director">
              <div
                class="flex h-full flex-col flex-wrap items-center justify-center self-center rounded bg-indigo-500 p-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-6 w-6 flex-shrink-0 text-center text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <h2 class="text-center text-xl text-white">Director</h2>
                <span class="text-center text-sm text-white">{{
                  movieData.Director
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="movieData.Response === 'False'">
        <p class="text-white">{{ movieData.Error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StarRating from 'vue-star-rating';
import axios from 'axios';

let searchText = ref('');
let movieData = ref({});

function getMovieFromApi(test) {
  let self = this;
  var searchApiUrl = 'https://www.omdbapi.com/?apikey=89ea98eb&t=';

  console.log(this.searchText, 'searchText');
  axios.get(searchApiUrl + this.searchText).then(
    function (response) {
      self.movieData = response.data;
    }.bind(this)
  );
}
</script>

<style lang="scss" scoped></style>
