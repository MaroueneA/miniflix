<template>
  <v-app>
    hello world
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-list three-line>

        <v-list-item v-for="movie in movies" :key ="movie.id"><!--vue needs to associate a unique id to each movie, that is the role of ":key"-->
          <v-list-item-content>
            <v-list-item-title>{{movie.Title}}</v-list-item-title> <!-- this is the title of the card -->
            <v-list-item-subtitle>{{movie.Subtitle}} </v-list-item-subtitle> <!-- this is the subtitle of the card -->
          </v-list-item-content>
          <v-list-item-action>
          <v-btn icon @click="deleteMovie(movie.id)">
            <v-icon small color="red darken-4">mdi-delete</v-icon><!--using words is better than hex-->
          </v-btn>
        </v-list-item-action>
        </v-list-item>

    </v-list>
  </v-card>
  </v-app>
</template>

<script>

import axios from 'axios';
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    movies:[]
  }),

  async mounted(){
    console.log("this file is mounted");
    const res= await axios.get("http://localhost:3000/movies");
    //"await" waits until it is done. it is only used in async funcs only.
    //put line 37 in a variable, always do that when you don't know the content of a line.
    console.log("finished mounting.",res.data);
    this.movies=res.data;
  },
  methods:{
    async deleteMovie(id){
      alert("delete movie "+id);
      const res= await axios.delete("http://localhost:3000/movies/"+id);

      if(res.data.ack){
        this.refreshMovies();
      }
    },
    async refreshMovies(){
      const res= await axios.get("http://localhost:3000/movies/");
      console.log("refreshed.",res.data);
      this.movies=res.data;
    }
  }
};
</script>
