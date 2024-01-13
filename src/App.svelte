<script lang="ts">
  import DrumMachine from "./lib/DrumMachine.svelte";
  import Footer from "./lib/Footer.svelte";
  import { playClip } from "./lib/DrumPad.svelte";
</script>

<main>
  <DrumMachine />
</main>
<Footer />
<svelte:window on:keydown={(e) => playClip(e.key.toUpperCase())} />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

  main {
    flex: 1;
    display: grid;
    place-items: center;
    font-family: "Abel", sans-serif;
  }
</style>
