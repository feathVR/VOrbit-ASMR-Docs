---
sidebar_position: 1
---

# Send the audio to OBS

Bring the processed voice into OBS through **exactly one route**. The same guidance appears under **Getting this into your stream** on the Devices tab.

![How to route audio into OBS](/img/screenshots/en/help-streaming-en.png)

_"Send the audio to OBS or a stream" on the Help tab. Usually use Method A or B; use the VB-CABLE steps below if you do not want to hear your live voice. Do not combine capture methods._

## Method A: Application Audio Capture (recommended)

Add **Application Audio Capture** in OBS and select VOrbit ASMR. Only VOrbit ASMR's audio is captured, and no additional software is required.

## Method B: Audio Output Capture

Select a headphone or other output in VOrbit ASMR, then add **Audio Output Capture** in OBS and select the same device. This also captures games, notifications and anything else sent to that device.

## Send your voice to OBS without hearing it yourself (VB-CABLE)

If OBS records your voice but hearing it through your headphones is uncomfortable, use [VB-Audio Virtual Cable (VB-CABLE)](https://vb-audio.com/Cable/) to separate VOrbit ASMR's output. These steps apply to the **Normal** audio route. Hearing your voice can help with the initial check, but you do not have to monitor it throughout a stream.

1. Download and install VB-CABLE from its official site. Windows will show **CABLE Input** as a playback device and **CABLE Output** as a recording device.
2. Press **Stop** in VOrbit ASMR. On **Devices**, change its output to **CABLE Input (VB-Audio Virtual Cable)**, then press **Start**. Keep the same microphone input. Leave your headphones as the normal Windows playback device; do not make CABLE Input the system-wide default output.
3. Add one **Audio Input Capture** source in OBS and select **CABLE Output (VB-Audio Virtual Cable)**. Do not also capture VOrbit ASMR using Method A or B above.
4. Turn off audio monitoring for this source in OBS. Also leave Windows' **Listen to this device** option for CABLE Output off. Either option can send your voice back to your headphones.
5. Check that the OBS meter responds to your voice, then make a short test recording. The recording should contain the processed left/right movement while your headphones do not play your live voice.

**CABLE Input receives sound from VOrbit ASMR; CABLE Output supplies it to OBS.** The names may seem reversed, but this is the correct pairing. Check that OBS is not also capturing the same sound through Desktop Audio or the unprocessed microphone. Turning off OBS monitoring alone cannot stop VOrbit ASMR from playing directly to your headphones.

## Check with a short recording

Before streaming, record about 20 seconds while moving your voice left and right, then play it back on headphones. Check that the position changes and that the audio is not doubled.

:::warning What causes doubled audio
Capturing the same signal through Desktop Audio and a separate source, or capturing the raw microphone in OBS as well, creates doubled audio. Watch the OBS meters and make sure the processed signal enters through only one route.
:::

## If you use a DAW

With the audio route set to **DAW (VST bridge)**, the processed voice comes out of your DAW. Set up a route for OBS to capture the processed DAW output. See [Use the VST bridge](../audio/vst-bridge).

## Show the dummy head image (optional)

You can also show a dummy head microphone image on stream. Enable **Show a dummy head mic on stream** on the Position tab, then adjust its size and position in VTube Studio or nizima LIVE. See [How the source moves](../spatial/overview#dummy-head-overlay).
