<script lang="ts">
  import DrumMachine from "./lib/DrumMachine.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<main>
  <DrumMachine />
</main>
<Footer />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

  main {
    flex: 1;
    display: grid;
    place-items: center;
    font-family: "Abel", sans-serif;
  }
</style>
