import { writable, type Writable } from "svelte/store";

export const displayText: Writable<string> = writable("Press any key");
