---
sidebar_position: 2
---

# Use the VST bridge

The VST bridge sends microphone audio from a DAW or VST host to VOrbit ASMR and returns the spatialized signal to the same plug-in insert.

<img src="/VOrbit-ASMR-Docs/img/vst-bridge-flow-en.svg" alt="Audio goes from the microphone through VOrbit Bridge and the DAW output to OBS. VOrbit ASMR exchanges audio with Bridge, while headphones are shown as a separate monitoring path" width="1400" height="820" />

_Conceptual signal-flow diagram. [Open the image to zoom in](/img/vst-bridge-flow-en.svg)._

For streaming, **configure a separate route for OBS to capture the processed DAW output**. Choose a method that fits your DAW and audio devices, such as an appropriate output route or virtual audio device. Hearing the sound in your headphones does not prove it reached OBS: check its audio meter and make a short test recording.

## Setup

1. Open Devices in VOrbit ASMR and select **DAW (VST bridge)**.
2. Expand **Use with a DAW (VST bridge)** and select **Open bridge location**.
3. Copy the entire **`VOrbit Bridge.vst3` folder** into a VST3 folder scanned by your DAW. Do not copy only the files inside it.
4. Rescan plug-ins in the DAW.
5. Insert **VOrbit Bridge** on the microphone track and enable input monitoring in the DAW.
6. Press Start in VOrbit ASMR.

![VST bridge setup screen](/img/screenshots/en/vst-bridge-en.png)

_The application shows the source folder and current connection state. The path in this image is a development example; your actual path depends on the installation location._

## DAW settings

- Configure input, output, sample rate, and buffer size in the DAW.
- Supported sample rates are **44.1 kHz and 48 kHz**.
- When disconnected from VOrbit ASMR, the plug-in passes audio through unchanged.
- After updating VOrbit ASMR, copy the new `VOrbit Bridge.vst3` folder again.

If it does not connect, stop VOrbit ASMR, reselect the audio route, and rescan the plug-in in your DAW.
