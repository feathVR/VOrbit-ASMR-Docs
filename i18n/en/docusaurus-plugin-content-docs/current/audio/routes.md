---
sidebar_position: 1
---

# Choose an audio route

VOrbit ASMR offers two ways to route audio. Neither is inherently better; choose the one that fits your streaming or recording workflow.

| Audio route | Best for | Where to configure input and output |
| --- | --- | --- |
| **Normal** | Using VOrbit ASMR directly with minimal setup | The Devices page in VOrbit ASMR |
| **DAW (VST bridge)** | Adding VOrbit ASMR to DAW tracks and existing effect chains | Your DAW or VST host |

![Audio route selector](/img/screenshots/en/audio-route-en.png)

_Switch between Normal and DAW (VST bridge) before starting audio._

## Normal

Select your microphone under Input and your headphones or earphones under Output, then press Start. For the first check, you can leave both on the system defaults.

## DAW (VST bridge)

VOrbit ASMR does not open an audio device directly. **VOrbit Bridge** receives audio from a DAW track, sends it to VOrbit ASMR for spatialization, and returns it to the same insert. Configure devices, sample rate, and buffer size in the DAW.

Continue with [Use the VST bridge](./vst-bridge).

:::note
You cannot switch audio routes while audio is running. Press Stop first.
:::
