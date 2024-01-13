<script lang="ts" context="module">
  export const displayText = writable("Press any key");
</script>

<script lang="ts">
  import DrumPad from "./DrumPad.svelte";
  import heater1 from "../assets/audio/heater-1.mp3";
  import heater2 from "../assets/audio/heater-2.mp3";
  import heater3 from "../assets/audio/heater-3.mp3";
  import heater4 from "../assets/audio/heater-4.mp3";
  import clap from "../assets/audio/clap.mp3";
  import openHh from "../assets/audio/open-hh.mp3";
  import kickNHat from "../assets/audio/kick-n-hat.mp3";
  import kick from "../assets/audio/kick.mp3";
  import closedHh from "../assets/audio/closed-hh.mp3";
  import { writable } from "svelte/store";
</script>

<div id="drum-machine">
  <h1>Drum Machine</h1>
  <p id="display">{$displayText}</p>
  <div id="pad-container">
    <DrumPad key="Q" audioSrc={heater1} clipName="Heater 1" />
    <DrumPad key="W" audioSrc={heater2} clipName="Heater 2" />
    <DrumPad key="E" audioSrc={heater3} clipName="Heater 3" />
    <DrumPad key="A" audioSrc={heater4} clipName="Heater 4" />
    <DrumPad key="S" audioSrc={clap} clipName="Clap" />
    <DrumPad key="D" audioSrc={openHh} clipName="Open HH" />
    <DrumPad key="Z" audioSrc={kickNHat} clipName="Kick n' Hat" />
    <DrumPad key="X" audioSrc={kick} clipName="Kick" />
    <DrumPad key="C" audioSrc={closedHh} clipName="Closed HH" />
  </div>
</div>

<style>
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
