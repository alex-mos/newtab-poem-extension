<template>
  <div :class="$style.page">
    <pre :class="$style.verse">{{ randomGarik }}</pre>
  </div>
</template>

<script>
import gubermanTxt from "./poetry/guberman.txt";

export default {
  name: "App",
  computed: {
    randomGarik() {
      const guberman = gubermanTxt.split("\n\n\n");
      const randomIndex = Math.floor(Math.random() * guberman.length);
      return guberman[randomIndex];
    },
  },
};
</script>

<style src="./app.css"></style>
<style src="./newtab.css" module></style>
