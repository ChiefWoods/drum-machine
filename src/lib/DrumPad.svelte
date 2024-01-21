<script lang="ts" context="module">
  import { displayText } from "./DrumMachine.svelte";

  const keyToClipname: { [key: string]: string } = {
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

  function playClip(key: string) {
    const audio = document.getElementById(key) as HTMLAudioElement;

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      displayText.set(keyToClipname[key]);
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    const button = document.getElementById(
      keyToClipname[e.key.toUpperCase()]
    ) as HTMLButtonElement;

    if (button) {
      button.classList.add("pressed");
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    const button = document.getElementById(
      keyToClipname[e.key.toUpperCase()]
    ) as HTMLButtonElement;

    if (button) {
      button.classList.remove("pressed");
    }

    playClip(e.key.toUpperCase());
  }
</script>

<script lang="ts">
  export let key: string;
  export let audioSrc: string;
  export let clipName: string;
</script>

<button
  id={clipName}
  class="drum-pad"
  type="button"
  on:click={() => playClip(key)}
>
  {key}
  <audio src={audioSrc} id={key} class="clip"></audio>
</button>
<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />

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
    outline: none;
  }

  .drum-pad:active,
  :global(.drum-pad.pressed) {
    background: #3c3c3c;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    color: rgb(187, 187, 187);
  }
</style>
