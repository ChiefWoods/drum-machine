<script lang="ts">
  import { getClipname } from "./pads";
  import { displayText } from "./stores";

  let {
    key,
    audioSrc,
    clipName,
  }: {
    key: string;
    audioSrc: string;
    clipName: string;
  } = $props();

  function playClip(key: string) {
    const audio = document.getElementById(key) as HTMLAudioElement;

    if (audio) {
      audio.currentTime = 0;
      audio.play();

      const clipname = getClipname(key);

      if (clipname) {
        displayText.set(clipname);
      }
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    const clipname = getClipname(e.key.toUpperCase());

    if (clipname) {
      const button = document.getElementById(clipname) as HTMLButtonElement;
      button.classList.add("pressed");
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    const clipname = getClipname(e.key.toUpperCase());

    if (clipname) {
      const button = document.getElementById(clipname) as HTMLButtonElement;
      button.classList.remove("pressed");
      playClip(e.key.toUpperCase());
    }
  }
</script>

<button
  id={clipName}
  class="drum-pad"
  type="button"
  onclick={() => playClip(key)}
>
  {key}
  <audio src={audioSrc} id={key} class="clip"></audio>
</button>
<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />

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
