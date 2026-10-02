---
sidebar_position: 2
---

# Use the VST bridge

The VST bridge sends microphone audio from a DAW or VST host to VOrbit ASMR and returns the spatialized signal to the same plug-in insert.

<img src="/VOrbit-ASMR-Docs/img/vst-bridge-flow-en.svg" alt="Audio goes from the microphone through VOrbit Bridge and the DAW output to OBS. VOrbit ASMR exchanges audio with Bridge, while headphones are shown as a separate monitoring path" width="1400" height="820" />

_Conceptual signal-flow diagram. [Open the image to zoom in](/img/vst-bridge-flow-en.svg)._

For streaming, **configure a separate route for OBS to capture the processed DAW output**. Choose a method that fits your DAW and audio devices, such as an appropriate output route or virtual audio device. Hearing the sound in your headphones does not prove it reached OBS: check its audio meter and make a short test recording.

## Setup

When you choose **DAW (VST bridge)** on the Devices tab, four steps appear under **Using it inside a DAW (VST bridge)**.

1. **Copy "VOrbit Bridge.vst3" into your DAW's VST3 folder**
   Press **Open the bridge folder** and copy the **whole `VOrbit Bridge.vst3` folder** into the VST3 folder your DAW scans. Despite the .vst3 name it is a folder with files inside; do not take out only the files inside it.
2. **Set this app's audio route to "DAW (VST bridge)"**
   It cannot change while running, so press **Stop** first.
3. **Re-scan in your host and insert it on the microphone track**
   Re-scan plug-ins in your DAW and insert **VOrbit Bridge** on the microphone track. Enable input monitoring in the DAW too.
4. **Press Start**
   Once the host connects, you can start spatializing.

![VST bridge setup screen](/img/screenshots/en/vst-bridge-en.png)

_The bridge location shown is an example from the capture environment. Your actual path depends on the installation._

## DAW settings

- Configure input, output, sample rate, and buffer size in the DAW.
- Supported sample rates are **44.1 kHz and 48 kHz**.
- When disconnected from VOrbit ASMR, the plug-in passes audio through unchanged.
- Audio files and your call partner's voice come back to the DAW as the output of the track the bridge is on. Do not put it on the DAW's whole mix, or your partner hears their own voice as an echo.
- Audio files and calls are unavailable while no DAW is connected.
- Rendering (offline processing) and freezing pass audio through unchanged.

## Recording voice, audio files and your partner separately

Also copy **`VOrbit Bridge Multi.vst3`** from the same folder and load it as an instrument in your DAW. It produces no sound on its own.

## Updating or removing it

- After updating VOrbit ASMR, copy the new `VOrbit Bridge.vst3` again.
- To stop using it, delete your copy of `VOrbit Bridge.vst3` yourself; uninstalling the app does not remove it.

If it does not connect, stop VOrbit ASMR, reselect the audio route, and rescan the plug-in in your DAW.

## Separate outputs and reconnecting {#separate-outputs}

Use VOrbit Bridge Multi alongside VOrbit Bridge. Outputs 1–2 carry your voice; 3–10 carry sources 1–4; 11–16 are stereo outputs for partners 1–3. In the current new call modes, the combined received audio goes to 11–12 and 13–16 are silent. Enable each output in the DAW and route it to separate recording tracks. These outputs are before the final mix's safety limiter, so manage their levels in the DAW.

After closing/crashing the app or disconnecting, the bridge stays in passthrough to avoid unexpectedly restoring processed audio. Reconnect from the app or bridge. Only one bridge can connect at a time. Use online export or record playback; offline export and freezing remain passthrough.
