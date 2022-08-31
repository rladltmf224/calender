<template>
  <v-app>
    <v-row class="ma-0 d-flex">
      <v-col cols="2" class="pa-0 ma-0 red" v-if="!count"> </v-col>
      <v-col
        cols="10 class
      pa-0 ma-0"
      >
        <v-sheet class="yellow" height="100vh"
          ><v-btn @click="drawer = !drawer">dd</v-btn></v-sheet
        >
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: '0817AppTest2',

  data() {
    return {
      drawer: null,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
