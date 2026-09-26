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

_The application shows the source folder and the current connection state. The path in this image is a development example; your actual path depends on the installation location._

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
