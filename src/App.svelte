<script lang="ts">
  import DrumPad from "./lib/DrumPad.svelte";
  import Footer from "./lib/Footer.svelte";
  import { pads } from "./lib/pads";
  import { displayText } from "./lib/stores";
</script>

<main>
  <div id="drum-machine">
    <h1>Drum Machine</h1>
    <p id="display">{$displayText}</p>
    <div id="pad-container">
      {#each pads as { key, audioSrc, clipName }}
        <DrumPad {key} {audioSrc} {clipName} />
      {/each}
    </div>
  </div>
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

  #drum-machine {
    background: #888888;
    width: 100%;
    max-width: 450px;
    padding: 20px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    font-size: 3rem;
    color: rgb(227, 227, 227);
    white-space: nowrap;
  }

  #display {
    background: #545454;
    height: 50px;
    width: 100%;
    font-size: 2.5rem;
    color: rgb(227, 227, 227);
    display: grid;
    place-items: center;
    white-space: nowrap;
  }

  #pad-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media (max-width: 450px) {
    #drum-machine {
      justify-content: space-between;
      height: 100%;
    }
  }
</style>
