<script lang="ts" context="module">
  import { displayText } from "./DrumMachine.svelte";

  const keyToClipname = {
    Q: "Heater 1",
    W: "Heater 2",
    E: "Heater 3",
    A: "Heater 4",
    S: "Clap",
    D: "Open HH",
    Z: "Kick n' Hat",
    X: "Kick",
    C: "Closed HH",
  };

  export function playClip(key: string) {
    const audio = document.getElementById(key) as HTMLAudioElement;

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      displayText.set(keyToClipname[key]);
    }
  }
</script>

<script lang="ts">
  export let key: string;
  export let audioSrc: string;
  export let clipName: string;
</script>

<div id={clipName} class="drum-pad" on:click={() => playClip(key)}>
  {key}
  <audio src={audioSrc} id={key} class="clip"></audio>
</div>

<style>
  .drum-pad {
    background: #515153;
    border: 1.5px solid black;
    border-radius: 8px;
    width: auto;
    aspect-ratio: 1/1;
    font-size: 3rem;
    color: rgb(227, 227, 227);
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
  }

  .drum-pad:active,
  .drum-pad.pressed {
    background: #3c3c3c;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    color: rgb(187, 187, 187);
  }
</style>
