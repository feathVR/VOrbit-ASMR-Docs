---
sidebar_position: 1
---

# Audio files, hotkeys and compact view

## Audio files

The **Audio files** tab plays up to four audio files independently, so you can place sound effects and ambience in the same space as your voice.

![The Audio files page](/img/screenshots/en/playback-en.png)

_Current app screen. Available features depend on the distribution._

- Press **Choose file** in a slot, or drag and drop an audio file onto it.
- Supported formats are WAV / MP3 / M4A / AAC / FLAC / WMA (using Windows codecs), up to 10 minutes per file.
- **Mono** files can be positioned. They appear as numbered circles on the Position pads and can be dragged at any time.
- **Stereo** files play with their original left–right image. They cannot be positioned.
- To play, audio processing must be running: press **Start** at the top.
- Playback is mixed into the same output as your microphone and is sent to your partner during a Collab call. Set the volume in each slot.
- Click or drag the waveform to choose the playback position.

## Playback, pause and volume {#playback-controls}

During playback the button becomes **Pause**. Pausing keeps the position; playing resumes there. **Stop** returns to the beginning. Click the waveform, or drag and release, to seek during playback or select the next start position while stopped or paused. Stereo waveforms show left L above right R. Their height is scaled to the file's peak, not to the output volume.

Volume uses dB (−60 to +20 dB; 0 dB is the original level and −60 dB is silent). Each source's **Room** selects whether it receives room reflections. Mono sources can also be dragged on the frontal/top-down pads on the audio files page. These pads exclude your voice and save their view range separately from Position.

## Presets and source sets {#source-sets}

Choose bundled sounds from **Presets**. Mosco's “VR向けASMRループ音源集” volumes 1–3 are provided for playback inside the app and cannot be extracted for other uses. About includes the creator's credit and collection link. Editions without the preset pack do not show this menu.

**Source sets** stores sources 1–4 together: sound, volume, loop, position and room reflections.

1. Stop all playing sources and choose a bundled or registered set with **Load set**. **Load from file…** also opens .vorbitset files.
2. Use **Save set** after adjusting the combination. Saved sets are also registered for Stream Deck.
3. **Register existing set…** registers an existing set. **Remove registration** removes only its registration, leaving the original set and audio files intact.

Sets cannot be loaded while sources are playing. Audio files are not copied into the set; moving or deleting them can make it unavailable.

## Hotkeys

The **Hotkeys** tab assigns keyboard shortcuts to app actions. They work even while another application is active.

![The Hotkeys page](/img/screenshots/en/hotkeys-en.png)

_Current app screen. Available features depend on the distribution._

1. Tick **Enable hotkeys**.
2. Click the key box at the right of the action's row.
3. Press the key you want and release it (Ctrl, Alt and Shift combinations are allowed).

Press Esc to cancel and × to clear an assignment. Reserved keys such as the Windows key, Esc and F12 cannot be used. If a key cannot be registered because another application uses it, choose a different key and press **Check conflicts again**.

## Mute everything {#master-mute}

The speaker button at the top silences your voice, sources, reverb, remote voices and audio sent to call partners. The button turns red and the window title indicates mute. Press again to restore audio. File playback continues silently. This is separate from muting only your microphone in a call. Mute is cleared at startup.

Assign hold-to-mute to a hotkey or Stream Deck for coughing or similar interruptions. Ear cover actions can also be assigned. Holding an ordinary shortcut does not repeat it. Hotkeys pause during assignment; cancellation or a conflict keeps the previous binding.

## Stream Deck and external control {#stream-deck}

Install the bundled Stream Deck plugin and place actions on keys. Control mute, ear cover, source playback/volume and source-set loading. It connects automatically when the app is running. A red connection icon means disconnected; actions pressed while disconnected are not queued for later.

Stream Deck + dials control source/output volume and ear coverage. Neo's Infobar displays status. An initial XL profile is included. Source sets cannot load during playback.

Custom tools can use the local WebSocket API on the same PC and Windows user. The bundled offline guide describes discovery and includes control.ps1 for PowerShell 7. Browser connections are rejected.

## Compact view and Always on top

**Compact view** at the top switches to a small window that takes little space while streaming. You can still start, mute, play audio files and handle Collab calls from it. **Back to full view** returns to the normal window.

Tick **Always on top** to keep the VOrbit ASMR window in front of other windows.
