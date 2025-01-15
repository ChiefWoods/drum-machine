import heater1 from "../assets/audio/heater-1.mp3";
import heater2 from "../assets/audio/heater-2.mp3";
import heater3 from "../assets/audio/heater-3.mp3";
import heater4 from "../assets/audio/heater-4.mp3";
import clap from "../assets/audio/clap.mp3";
import openHh from "../assets/audio/open-hh.mp3";
import kickNHat from "../assets/audio/kick-n-hat.mp3";
import kick from "../assets/audio/kick.mp3";
import closedHh from "../assets/audio/closed-hh.mp3";

export const pads = [
  {
    key: "Q",
    audioSrc: heater1,
    clipName: "Heater 1",
  },
  {
    key: "W",
    audioSrc: heater2,
    clipName: "Heater 2",
  },
  {
    key: "E",
    audioSrc: heater3,
    clipName: "Heater 3",
  },
  {
    key: "A",
    audioSrc: heater4,
    clipName: "Heater 4",
  },
  {
    key: "S",
    audioSrc: clap,
    clipName: "Clap",
  },
  {
    key: "D",
    audioSrc: openHh,
    clipName: "Open HH",
  },
  {
    key: "Z",
    audioSrc: kickNHat,
    clipName: "Kick n' Hat",
  },
  {
    key: "X",
    audioSrc: kick,
    clipName: "Kick",
  },
  {
    key: "C",
    audioSrc: closedHh,
    clipName: "Closed HH",
  },
];

export function getClipname(key: string) {
  return pads.find((pad) => pad.key === key)?.clipName;
}
