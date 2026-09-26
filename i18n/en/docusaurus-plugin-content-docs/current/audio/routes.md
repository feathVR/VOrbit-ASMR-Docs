---
sidebar_position: 1
---

# Choose an audio route

VOrbit ASMR lets you choose how audio travels through it. Neither route sounds better; choose the one that fits the way you stream and record. Switch it under **Audio route** on the **Devices** tab.

| Audio route | Best for | Where input and output are set |
| --- | --- | --- |
| **Normal** | Quick use with VOrbit ASMR on its own | The VOrbit ASMR Devices page |
| **DAW (VST bridge)** | Working inside DAW tracks and an existing effect chain | Your DAW / VST host |

![Settings on the Devices page](/img/screenshots/en/device-card-en.png)

_The Devices page with Normal selected: audio route, noise reduction, input and output devices, dropout protection, and getting the audio into your stream._

## With Normal

Choose your microphone under **Input device (microphone)** and your headphones or earphones under **Output device**, then press **Start** at the top. For a first check you can leave both on **System default**. Press **Refresh** after reconnecting a device.

### Match the sample rates

The microphone and output sample rates are shown on the page. Set both to the same supported rate (44100 / 48000 / 88200 / 96000 Hz) in Windows Sound settings or your audio interface's control panel. After changing them, press **Stop** and then **Start** again.

### Dropout protection mode

If crackling or dropouts continue, turn on **Dropout protection mode**. It runs the microphone and output separately with some headroom between them, which adds about 30 ms of latency. It also keeps things stable when the microphone and output are different devices.

## With DAW (VST bridge)

VOrbit ASMR does not open audio devices itself. It receives audio from **VOrbit Bridge** inserted in your DAW and returns the spatialized audio to the same place. Devices, sample rate and buffer size are configured in the DAW.

If you use an audio interface, this route can be steadier. Continue with [Use the VST bridge](./vst-bridge).

:::note
While running, you cannot change the audio route, input and output devices, noise reduction, or dropout protection mode. Press **Stop** first.
:::
