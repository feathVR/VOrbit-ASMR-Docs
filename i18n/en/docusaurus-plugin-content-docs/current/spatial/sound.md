---
sidebar_position: 2
---

# Sound settings (HRTF and room ambience)

The **Sound** tab chooses how the voice itself sounds.

![The Sound page](/img/screenshots/en/sound-en.png)

_Current app screen. Available features depend on the distribution._

## HRTF

An HRTF (head-related transfer function) describes how the shape of the head and ears changes a sound. Everyone hears these a little differently, so choose the one that gives you the clearest sense of position.

| Option | Description |
| --- | --- |
| **Steam Audio built-in** | The default HRTF built into Steam Audio |
| **Neumann KU100** | Measured with the KU100 dummy-head microphone |
| **KEMAR** | Measured with the KEMAR research dummy head |

A good way to choose is to switch between them while moving your voice left, right, front and back on headphones, and keep the one whose positions are clearest and most natural.

## Room ambience

Adds room reflections to the voice. The default is **No reverb**.

- No reverb
- Locker room
- Bathroom
- Recording booth
- Furnished small room
- Reverberation chamber
- Concert hall
- Tunnel

## Output volume

The overall volume of everything VOrbit ASMR outputs.

## Spatialization

Untick it to output the microphone as-is, without spatialization. It is also handy for comparing the sound with and without spatialization.

## Safety limiter {#safety-limiter}

Limits sudden peaks in the final mix of your voice, sources and remote voices to −1 dBFS. It is on by default, preserves the left/right level ratio and displays the gain reduction while active. The 5 ms look-ahead delay applies even when it is off. It cannot control gain added by downstream hardware or streaming software.

## Ear cover {#ear-cover}

Below room acoustics, simulate hands covering the listener's ears. A low rumble and contact/peeling sounds accompany muffling of your voice, sources 1–4, room reflections and remote voices. Your audio sent to your call partners is unaffected.

- Use the left, right or both-ear button to cover; press again to release. Each ear closes to its last nonzero slider position (initially 100%). If both ears are covered, the both-ear button releases both; otherwise it covers the open ear or ears.
- The **Left ear** and **Right ear** sliders set hand position (0–100%). Movement speed also changes the sound. Double-click to return to 0%.
- **Link left and right** is on by default. Moving either slider moves both by the same amount, preserving their difference until an ear reaches an endpoint. Linking applies only to sliders.
- **Cover time** and **Release time** control how long the rumble takes to rise or fade with button operations. Adjust **Rumble level**, **Peel sound level** and **Use the oil sound** for level and texture.
- Hotkeys and Stream Deck also offer hold-to-cover. Releasing restores the state from before the hold.

Both ears start open. Linking, sound adjustments and closing targets are saved; the current covering amount is not.
