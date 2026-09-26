---
sidebar_position: 1
---

# Make your first sound

This page takes you from installation to hearing your voice move through space. Start without tracking and move the voice by hand first; it makes it much easier to see where something goes wrong.

## Quick start at a glance

<img src="/VOrbit-ASMR-Docs/img/quick-start-en.svg" alt="Five-step VOrbit ASMR quick start covering first sound and optional automatic tracking" width="1200" height="1600" />

_Steps 1–3 check sound and position. Continue with steps 4–5 only if you want automatic tracking. [Open the image to zoom in](/img/quick-start-en.svg)._

## What you need

- A microphone and headphones or earphones
- For automatic movement, a compatible avatar or tracking application (VTube Studio, nizima LIVE, or a VMC sender)

:::warning
Use headphones or earphones instead of speakers when checking spatial audio. Speakers cannot reproduce the intended binaural positioning reliably.
:::

## Follow the tutorial

On first launch the app opens the Devices page and shows a **Getting started** guide at the top of the window. It has five steps:

![The Getting started guide](/img/screenshots/en/tutorial-en.png)

_The Getting started guide, showing its first step, "Choose microphone and output"._

1. Choose microphone and output
2. Listen to the position change
3. Connect tracking
4. Capture center and movement range
5. Send the audio to your stream

**Show settings** on each step opens the page for that step and highlights where to look. A step is marked as done when you complete it, but the guide never moves on by itself. Press **Checked — next** when you are ready.

To stop part way, press **Later (Help)**. You can start again from the beginning with **Start tutorial** on the Help tab.

## Steps

### 1. Choose microphone and output

Open the **Devices** tab and make sure **Audio route** is set to **Normal**. Choose your microphone under **Input device (microphone)** and the device your headphones are connected to under **Output device**. Leave either one on **System default** if you are unsure.

To use VOrbit ASMR inside a DAW, choose **DAW (VST bridge)** and follow the [VST bridge setup](../audio/vst-bridge).

![The Devices page](/img/screenshots/en/device-en.png)

_The Devices page. With Normal selected, choose the microphone and output here._

### 2. Press Start and make a sound

Press **Start** at the top and hold an "ah" into the microphone. You are set when you hear yourself in your headphones and both the input and output meters at the top move.

### 3. Drag the red dot

On the **Position** tab, set **Control mode** to **Manual**. Keep holding the sound while you drag the red dot (your voice) on a pad from side to side. If your voice moves in your headphones, you have the basic VOrbit ASMR experience working.

![The Position page in Manual mode](/img/screenshots/en/position-manual-en.png)

_The left pad shows horizontal and vertical position; the right pad shows horizontal position and depth. The red dot is your voice._

### 4. Move the voice automatically (optional)

To let your avatar move the voice, [connect tracking](../tracking/overview) and [calibrate the centre and range](../tracking/calibration).

### 5. Send the audio to your stream

If you stream, see [Send the audio to OBS](../streaming/obs).

:::tip Noise reduction is optional
Enable it only when steady background noise such as a PC fan or air conditioner is distracting. It is off by default and adds about 10 ms of latency. See [Noise reduction](../audio/noise-suppression) for details.
:::

## If it does not work

Use [Common issues](../troubleshooting/common-issues) to check dropouts, audio devices, and the tracking connection.
