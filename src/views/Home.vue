<template>
  <v-layout justify-center>
    <v-flex xs10 sm6>
      <!-- About Me Start -->
      <v-card class='mt-4 elevation-1'>
        <v-img
          class="white--text"
          height="175px"
          src="https://images.unsplash.com/photo-1543003743-993c0632996e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
          <v-container fill-height fluid>
            <v-layout fill-height justify-center>
              <v-flex xs12 align-end flexbox >
                <span class="headline black--text">Mein Boot und Ich</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span>Moin Moin</span><br>
            <span>Ich bin Stefan und werde euch in dieser tollen
               Karte mich selbst und mein Boot vorstellen!</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat :to="{name: 'about'}">mehr</v-btn>
        </v-card-actions>
      </v-card>
      <!-- About Me end -->

      <!-- Tour Carousel Begin -->
      <v-carousel v-if="loaded" class="elevation-0" hide-controls hide-delimiters :cycle="false">
        <v-carousel-item v-for="tour in tours" :key="tour.docID">
          <v-card class="mt-4">
            <v-img class="white--text" height="175px" :src="tour.cover">
              <v-container fill-height fluid>
                <v-layout fill-height justify-center>
                  <v-flex xs12 align-end flexbox >
                    <span class="headline black--text">{{tour.title}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div class="pl-4">
                <span v-if="tour.subtitle">{{ tour.subtitle || ''}}</span><br>
                <h5 v-if="tour.startDate && tour.endDate">{{ tour.startDate }} - {{ tour.endDate }}</h5>
                <span>{{ tour.excerpt || (tour.description | truncate(80, '...')) }}</span><br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="Light Blue" :to="{ name: 'tour', params: { id: tour.id }}">mehr</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
      <v-progress-circular v-else :width="5" color="primary" indeterminate />
      <!-- Tour Carousel End -->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  filters: {
    truncate(description, length, suffix) {
      if (description.length > length) {
        return description.substring(0, length) + suffix;
      }
      return description;
    },
  },
  computed: {
    ...mapState([
      'tours',
    ]),
    loaded() {
      return Object.keys(this.tours).length > 0;
    },
  },
  beforeMount() {
    this.$store.dispatch('loadTours');
  },
};
</script>
