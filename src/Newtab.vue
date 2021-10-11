<template>
  <div :class="$style.page">
    <pre :class="$style.verse">{{ randomGarik }}</pre>
  </div>
</template>

<script>
import gariksTxt from "./gariks.txt";

export default {
  name: "App",
  computed: {
    randomGarik() {
      const gariks = gariksTxt.split("\n\n\n");
      const randomIndex = Math.floor(Math.random() * gariks.length);
      return gariks[randomIndex];
    },
  },
};
</script>

<style src="./newtab.css" module></style>
