---
sidebar_position: 1
---

# Send the audio to OBS

Bring the processed voice into OBS through **exactly one route**. The same guidance appears under **Getting this into your stream** on the Devices tab.

![How to route audio into OBS](/img/screenshots/en/help-streaming-en.png)

_"Send the audio to OBS or a stream" on the Help tab. Use either Method A or Method B, not both._

## Method A: Application Audio Capture (recommended)

Add **Application Audio Capture** in OBS and select VOrbit ASMR. Only VOrbit ASMR's audio is captured, and no additional software is required.

## Method B: Audio Output Capture

Select a headphone or other output in VOrbit ASMR, then add **Audio Output Capture** in OBS and select the same device. This also captures games, notifications and anything else sent to that device.

## Check with a short recording

Before streaming, record about 20 seconds while moving your voice left and right, then play it back on headphones. Check that the position changes and that the audio is not doubled.

:::warning What causes doubled audio
Capturing the same signal through Desktop Audio and a separate source, or capturing the raw microphone in OBS as well, creates doubled audio. Watch the OBS meters and make sure the processed signal enters through only one route.
:::

## If you use a DAW

With the audio route set to **DAW (VST bridge)**, the processed voice comes out of your DAW. Set up a route for OBS to capture the processed DAW output. See [Use the VST bridge](../audio/vst-bridge).

## Show the dummy head image (optional)

You can also show a dummy head microphone image on stream. Enable **Show a dummy head mic on stream** on the Position tab, then adjust its size and position in VTube Studio or nizima LIVE. See [How the source moves](../spatial/overview#show-a-dummy-head-mic-on-stream).
