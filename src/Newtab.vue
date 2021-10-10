<template>
  <div :class="$style.page">
    <pre :class="$style.verse">
  Наверно, так понур я от того,
  что многого достиг в конце концов,
  не зная, что у счастья моего
  усталое и тусклое лицо.
</pre
    >
  </div>
</template>

<script>
// import gariksTxt from "./gariks.txt"

export default {
  name: "App",
  created() {
    console.log("created");
    //   const gariks = gariksTxt.split("\n\n")
    //   const randomIndex = Math.floor(Math.random() * (gariks.length + 1))
    //   const randomGarik = gariks[randomIndex]
    //   const verseElement = document.getElementById("verse")
    //   // verseElement.append(randomGarik)
  },
};
</script>

<style src="./newtab.css" module></style>
