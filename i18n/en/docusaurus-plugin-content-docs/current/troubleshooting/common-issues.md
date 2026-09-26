---
sidebar_position: 1
---

# Common issues

The same checks are also available in the app under **If something is not working** on the Help tab.

![The Help page](/img/screenshots/en/help-en.png)

_The Help tab: restart the tutorial, open this guide, and follow task-based instructions. Use headphones or earphones to check binaural audio._

## Crackling or dropouts

1. On the **Devices** page, check the microphone and output sample rates.
2. Set both to the same supported rate (44100 / 48000 / 88200 / 96000 Hz) in Windows Sound settings or your audio interface's control panel.
3. Press **Stop** and then **Start** again.
4. If it continues, turn on **Dropout protection mode** (adds about 30 ms of latency).

If you use an audio interface, the [DAW (VST bridge)](../audio/vst-bridge) route can be steadier.

## You cannot hear your own voice, or there is no sound

- Confirm that the top button says **Stop** (audio is running).
- Check the input meter, then the output meters. If only the input moves, check the output device and the output volume on the Sound tab.
- Check that the input and output devices are the ones you intend. Press **Refresh** after reconnecting a device.
- Check that **Mute** at the top is not on, and check Windows' own mute and volume.
- With the **DAW (VST bridge)** route, check input, output and monitoring in your DAW.

## Tracking will not connect / the dot does not turn blue

- Confirm the Position tab's control mode is **Auto (tracking)**.
- Confirm the tracking source says **Receiving**.
- Confirm that a parameter other than `—` is assigned to the axis you use.
- Confirm that the assigned axis shows **Calibrated**.

## The voice moves, but the position feels wrong

- [Calibrate](../tracking/calibration) again in your avatar's usual pose.
- Check **Invert** and **Smoothing** under **Movement range**.
- Check that **Orbit around the head (recommended)** is on or off as you intend.
- Check **Horizontal arc**, **Vertical arc** and **Depth range**.

## Another application on the same PC no longer receives VMC

Enable **Forward received data to port** under **Connection details**. See [Tracking sources](../tracking/overview#vmc-forwarding).

## Collab cannot connect

Confirm both people pressed Start, then retry from the beginning with a fresh invite code. Also try another fixed-line or IPv6-capable connection. See [Collab calls](../collab/call#cannot-connect).

## Doubled or echoing audio

- Check that OBS is not capturing the same signal twice ([Send the audio to OBS](../streaming/obs)).
- Check that speaker audio is not feeding back into the microphone. Headphones are recommended.

## If the problem remains

Use **Export diagnostic ZIP** on the About tab, review the contents, and attach it to your bug report. The ZIP contains no audio, invite codes or credentials.
